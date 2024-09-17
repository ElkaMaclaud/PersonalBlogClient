import React from "react";
import classes from "./style/Posts.module.css";
import { CardPost } from "../../UI_Components";
import { useAppSelector } from "../../store/reduxHooks";
import { Link } from "react-router-dom";

const Posts = () => {
    const posts = useAppSelector((state) => state.page.data.posts);
    return (
        <div className={classes.posts}>
            <div className={classes.postsHeader}>
                <div className={classes.postsHeaderNew}>Recent posts</div>
                <Link to="/posts"><div className={classes.postsHeaderAll}>View all</div></Link>
            </div>
            <div className={classes.postsWrapper}>
                {posts.length > 0 &&
                    posts.slice(0, 2).map((post) => {
                        const key = Math.random().toString(30).substring(2, 15);
                        return (
                            <Link to={`/post/${post.id}`} key={key}>
                                <div className={classes.post} >
                                    <CardPost {...post} />
                                </div>
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
};

export default Posts;
