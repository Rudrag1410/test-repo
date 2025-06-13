import Meta from "@/components/Meta";
import BlogDetail from "@/features/Blogs/BlogDetail";
import { NextPage } from "next";

const BlogDetailPage: NextPage = () => {
  return (
    <>
      <Meta
        pageTitle="Blog Detail"
        pageDescription="Blog Detail"
        keyWords="Blog Detail"
      />
      <BlogDetail />
    </>
  );
};

export default BlogDetailPage;
