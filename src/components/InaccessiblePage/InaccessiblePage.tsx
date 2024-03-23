import React from "react";
import classes from "./style/InaccessiblePage.module.css";
import { useNavigate } from "react-router-dom";
import { Arrow } from "../../UI_Components";

const InaccessiblePage = () => {
    const navigate = useNavigate();
    return (
        <div className={classes.wrapperPage}>
            <div  onClick={() => navigate(-1)} className={classes.pageLink}>
                <Arrow />
                <span>Вернуться назад</span>
            </div>
            <img
                src="https://trudovik.pro/upload/iblock/d80/d80ddd460fa3696a1dd4919a41043c39.png"
                alt=""
            />
        </div>
    );
};

export default InaccessiblePage;
