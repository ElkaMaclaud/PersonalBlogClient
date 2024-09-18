import React, { useEffect, useState } from "react";
import { FETCH_WORK, IWorks } from "../../store/slice";
import { useAppDispatch } from "../../store/reduxHooks";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import classes from "./style/WorkPage.module.css";

const WorkPage = () => {
    const { id } = useParams();
    const [work, setWork] = useState<IWorks>({
        _id: id || "1",
        image: "",
        date: "",
        header: "",
        category: "",
        description: "",
    });
    const [loading, setLoading] = useState(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(FETCH_WORK(id!));
                if (FETCH_WORK.fulfilled.match(response)) {
                    const result = response.payload;
                    if (result.success) {
                        setLoading(false);
                        setWork(result.data);
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

    if (loading) {
        return <Spinner />;
    }
    return (
        <main className={classes.wrapperCard}>
            <div className={classes.wrapperCardImg}>
                <img src={work.image} alt="" />
            </div>
            <div className={classes.worksDescription}>
                <div className={classes.worksHeader}>{work.header}</div>
                <div className={classes.worksDate}>
                    <span className={classes.worksYear}>{work.date}</span>
                    <span className={classes.worksLabel}>{work.category}</span>
                </div>
                <div className={classes.worksText}>
                    {work.description} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Accusamus inventore et dolores dolore
                    nesciunt quo id magni illo aliquam sunt quia ut similique,
                    molestiae sequi. Ab fugit ipsam ex odit?
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio accusantium optio quod! Deserunt quos id omnis quo, ea
                    inventore? Ipsa ullam asperiores aliquid aperiam provident
                    amet soluta dolor officiis repudiandae!
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio accusantium optio quod! Deserunt quos id omnis quo, ea
                    inventore? Ipsa ullam asperiores aliquid aperiam provident
                    amet soluta dolor officiis repudiandae!
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio accusantium optio quod! Deserunt quos id omnis quo, ea
                    inventore? Ipsa ullam asperiores aliquid aperiam provident
                    amet soluta dolor officiis repudiandae!
                </div>
            </div>
        </main>
    );
};

export default WorkPage;
