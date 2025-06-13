import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { allBlogs } from "contentlayer/generated";
import BlogCard from "./BlogCard";
import Icon from "@/components/Icon";

const Blog = () => {
  const router = useRouter();
  const { category } = router.query;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const blogPosts = allBlogs.filter((blog) => !blog.draft);

  const categories = [
    { name: "All", slug: "" },
    ...Array.from(
      new Set(blogPosts.map((blog) => blog.category).filter(Boolean))
    ).map((cat) => ({
      name: cat,
      slug: cat,
    })),
  ];

  const filteredBlogs = blogPosts.filter((blog) => {
    const matchesCategory =
      category && category !== "" ? blog.category === category : true;
    const matchesSearch = searchQuery
      ? blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.summary?.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-8 max-w-6xl mx-auto mt-14">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h1 className="text-center text-4xl md:text-5xl font-bold mb-6 md:leading-[150%]">
            The WhatsApp Marketing
            <br />
            Blog by TrioChat
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-3 px-4 bg-card text-foreground rounded-lg border border-border focus:ring-2 focus:ring-primary placeholder-muted-foreground"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              <Icon name="searchIcon" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.slug ? `/blogs/${cat.slug}` : "/blogs"}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border
                  ${
                    category === cat.slug || (!category && cat.slug === "")
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground border-border hover:bg-primary hover:text-primary-foreground"
                  }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </motion.div>

        {filteredBlogs.length === 0 && (
          <motion.div variants={itemVariants} className="text-center py-16">
            <Icon name="notFound" />
            <h3 className="text-xl font-medium text-foreground mb-2">
              No posts found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try different search terms or categories
            </p>
            <Link
              href="/blogs"
              className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition"
            >
              View All Posts
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Blog;
