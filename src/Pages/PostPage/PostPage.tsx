import React, { useEffect, useState } from "react";
import classes from "./style/PostPage.module.css";
import { FETCH_POST, IPost } from "../../store/slice";
import { useAppDispatch } from "../../store/reduxHooks";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const PostPage = () => {
    // const segments = window.location.href.split("/");
    // const id = segments[segments.length - 1];
    const { id } = useParams();
    const [post, setPost] = useState<IPost>({
        _id: id || "2",
        header: "",
        date: "",
        category: "",
        description: "",
    });
    const [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(FETCH_POST(id!));
                // if (FETCH_POST.pending.match(response)){}
                if (FETCH_POST.fulfilled.match(response)) {
                    const result = response.payload;
                    if (result.success) {
                        setLoading(false);
                        setPost(result.data);
                    } else {
                        throw new Error(result.message);
                    }
                } else {
                    console.error(
                        response.payload?.message || "Неизвестная ошибка"
                    );
                }
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };

        fetchData();
    }, [dispatch, id]);

    if(loading) {
        return <Spinner />
    }
    return (
        <div className={classes.wrapperCard}>
            <div className={classes.postHeader}>{post.header}</div>
            <div className={classes.postDate}>
                <span>{post.date}</span>
                <span>{"|"}</span>
                <span>{post.category}</span>
            </div>
            <div className={classes.postText}>
                {post.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptate quam iure eveniet ratione
                praesentium ea inventore reprehenderit vitae, aliquid doloribus
                beatae quae deleniti adipisci illum esse, velit ipsum corrupti!
                Minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt repudiandae odio quo culpa explicabo quasi id
                voluptatibus sint quae necessitatibus magni, aut cupiditate
                exercitationem cumque maxime nobis? Sint, soluta excepturi.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate quam iure eveniet ratione praesentium ea inventore
                reprehenderit vitae, aliquid doloribus beatae quae deleniti
                adipisci illum esse, velit ipsum corrupti! Minus! Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Deserunt
                repudiandae odio quo culpa explicabo quasi id voluptatibus sint
                quae necessitatibus magni, aut cupiditate exercitationem cumque
                maxime nobis? Sint, soluta excepturi.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate quam iure eveniet ratione praesentium ea inventore
                reprehenderit vitae, aliquid doloribus beatae quae deleniti
                adipisci illum esse, velit ipsum corrupti! Minus! Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Deserunt
                repudiandae odio quo culpa explicabo quasi id voluptatibus sint
                quae necessitatibus magni, aut cupiditate exercitationem cumque
                maxime nobis? Sint, soluta excepturi.
            </div>
        </div>
    );
};

export default PostPage;
