/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";
import { writeFileSync } from "fs";
import readingTime from "reading-time";
import path from "path";
import siteMetadata from "./data/siteMetadata";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { execSync } from "child_process";

// Pliny plugins
import {
  remarkCodeTitles,
  remarkImgToJsx,
  extractTocHeadings,
} from "pliny/mdx-plugins/index.js";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer.js";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ""),
  },
  path: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
  filePath: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFilePath,
  },
  toc: { type: "json", resolve: (doc) => extractTocHeadings(doc.body.raw) },
};

function createSearchIndex(allBlogs: any) {
  if (
    siteMetadata?.search?.provider === "kbar" &&
    siteMetadata.search.kbarConfig.searchDocumentsPath
  ) {
    writeFileSync(
      `public/${path.basename(siteMetadata.search.kbarConfig.searchDocumentsPath)}`,
      JSON.stringify(allCoreContent(sortPosts(allBlogs)))
    );
    console.log("Local search index generated...");
  }
}

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] },
    lastmod: { type: "date" },
    draft: { type: "boolean" },
    summary: { type: "string" },
    category: { type: "string" },
    images: { type: "json" },
    authors: { type: "list", of: { type: "string" } },
    layout: { type: "string" },
    bibliography: { type: "string" },
    canonicalUrl: { type: "string" },
  },
  computedFields,
}));

export const Authors = defineDocumentType(() => ({
  name: "Authors",
  filePathPattern: "authors/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: { type: "string", required: true },
    avatar: { type: "string" },
    occupation: { type: "string" },
    company: { type: "string" },
    email: { type: "string" },
    twitter: { type: "string" },
    bluesky: { type: "string" },
    linkedin: { type: "string" },
    github: { type: "string" },
    layout: { type: "string" },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, Authors],
  mdx: {
    remarkPlugins: [remarkGfm, remarkCodeTitles, remarkMath, remarkImgToJsx],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          headingProperties: {
            className: ["content-header"],
          },
        },
      ],
    ],
  },
  onSuccess: async (importData) => {
    const { allDocuments } = await importData();
    const allBlogs = allDocuments.filter(
      (doc) => doc._raw.sourceFileDir === "blog"
    );
    createSearchIndex(allBlogs);

    try {
      execSync(
        "find .contentlayer -name '*.mjs' -type f -exec sed -i.bak \"s/assert { type: 'json' }/with { type: 'json' }/g\" {} \\;"
      );
    } catch (error) {
      console.log(error);
    }
  },
});
