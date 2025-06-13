import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { allBlogs } from "contentlayer/generated";
import MarkDownRenderer from "@/components/MarkDownRenderer";

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogDetail = allBlogs.find((blog) => blog.slug === slug);

  if (!blogDetail) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-5xl mt-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
        <Link href="/blogs" className="text-primary hover:underline">
          Return to blogs
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    ...(blogDetail.tags && blogDetail.tags.length > 0
      ? [
          {
            label: blogDetail.category,
            href: `/blogs/${blogDetail.category}`,
          },
        ]
      : []),
    {
      label: blogDetail.title,
      href: `/blogs/${blogDetail.category}/${blogDetail.slug}`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="container mx-auto px-4 py-8 max-w-5xl mt-10"
    >
      <motion.nav variants={itemVariants} className="text-sm mb-6">
        <ol className="flex items-center space-x-1">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-muted-foreground">/</span>
              )}
              <Link
                href={crumb.href}
                className={`text-muted-foreground hover:text-foreground ${
                  index === breadcrumbs.length - 1 ? "font-medium" : ""
                }`}
              >
                {crumb.label}
              </Link>
            </li>
          ))}
        </ol>
      </motion.nav>

      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {blogDetail.title}
        </h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{new Date(blogDetail.date).toLocaleDateString()}</span>
          {blogDetail.authors && blogDetail.authors.length > 0 && (
            <>
              <span className="mx-2">•</span>
              <span>{blogDetail.authors.join(", ")}</span>
            </>
          )}
        </div>
      </motion.div>

      {blogDetail.images && blogDetail.images.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="relative rounded-lg overflow-hidden mb-10 h-[500px] bg-muted"
        >
          <Image
            src={blogDetail.images[0]}
            alt={blogDetail.title}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      )}

      <motion.article
        variants={itemVariants}
        className="prose prose-lg max-w-none mb-12 dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-p:my-4 prose-ul:my-4 prose-li:my-2"
      >
        <MarkDownRenderer content={blogDetail.body.raw} />
      </motion.article>

      {blogDetail.tags && blogDetail.tags.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 mb-12"
        >
          {blogDetail.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-card text-foreground px-3 py-1 rounded-full text-sm border border-border"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default BlogDetail;
