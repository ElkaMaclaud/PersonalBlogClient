import React from "react";
import classes from "./style/Posts.module.css";
import { CardPost } from "../../UI_Components";
import { useAppSelector } from "../../store/reduxHooks";

const Posts = () => {
  const posts = useAppSelector((state) => state.page.data[0].posts);
  return (
    <div className={classes.posts}>
      <div className={classes.postsHeader}>
        <div className={classes.postsHeaderNew}>Recent posts</div>
        <div className={classes.postsHeaderAll}>View all</div>
      </div>
      <div className={classes.postsWrapper}>
        {posts.length > 0 &&
          posts.map((post) => {
            const key = Math.random().toString(30).substring(2, 15);
            return (
              <div className={classes.post} key={key}>
                <CardPost {...post} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Posts;
