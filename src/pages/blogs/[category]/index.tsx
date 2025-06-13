import { NextPage } from "next";
import Blogs from "@/features/Blogs";
import Meta from "@/components/Meta";

const BlogsCategoryPage: NextPage = () => {
  return (
    <>
      <Meta pageTitle="Blogs" pageDescription="Blogs" keyWords="Blogs" />
      <Blogs />
    </>
  );
};

export default BlogsCategoryPage;
