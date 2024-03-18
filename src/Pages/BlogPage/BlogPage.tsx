import React, { useEffect } from "react";
import classes from "./style/BlogPage.module.css";
import Resume from "../../components/Resume/Resume";
import Posts from "../../components/Posts/Posts";
import Works from "../../components/Works/Works";
import { useAppDispatch } from "../../store/reduxHooks";
import { FETCH_ALL_DATA } from "../../store/slice";

const BlogPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(FETCH_ALL_DATA());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={classes.wrapperBlog}>
      <Resume />
      <Posts />
      <Works />
    </main>
  );
};

export default BlogPage;
