import React from "react";
import classes from "./style/Works.module.css";
import { CardWorks } from "../../UI_Components";
import { useAppSelector } from "../../store/reduxHooks";
import { Link } from "react-router-dom";

const Works = () => {
    const works = useAppSelector((state) => state.page.data.works);
    return (
        <div className={classes.works}>
            <div className={classes.worksHeaderNew}>Featured works</div>
            <div className={classes.worksWrapper}>
                {works.length > 0 &&
                    works.map((work) => {
                        const key = Math.random().toString(30).substring(2, 15);
                        return (
                            <Link to={`/work/${work._id}`} key={key}>
                                <CardWorks {...work} />
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
};

export default Works;
