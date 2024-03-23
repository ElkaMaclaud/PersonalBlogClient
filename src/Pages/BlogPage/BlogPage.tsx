import React from "react";
import classes from "./style/BlogPage.module.css";
import Resume from "../../components/Resume/Resume";
import Posts from "../../components/Posts/Posts";
import Works from "../../components/Works/Works";

const BlogPage = () => {
  return (
    <main className={classes.wrapperBlog}>
      <Resume />
      <Posts />
      <Works />
    </main>
  );
};

export default BlogPage;
