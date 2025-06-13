import { Blog } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogCard = ({ blog }: { blog: Blog }) => {
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
      key={blog._id}
      variants={itemVariants}
      className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
    >
      <Link href={`/blogs/${blog.category}/${blog.slug}`}>
        <div className="relative h-56 bg-muted">
          <Image
            src={blog.images?.[0] || "/static/images/placeholder.jpg"}
            alt={blog.title}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <div className="flex justify-between gap-2 p-3 items-center">
            <span className="text-xs text-muted-foreground rounded-full border-[1px] border-gray-300 text-foreground px-2 py-1">
              {blog.category}
            </span>
            <span className="text-muted-foreground text-xs">
              {blog.readingTime.text}
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground my-2 px-4">
            {blog.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
