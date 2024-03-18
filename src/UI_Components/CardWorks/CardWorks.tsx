import React, { FC } from "react";
import classes from "./style/CardWorks.module.css";

export const CardWorks: FC<{
  header: string;
  date: string;
  image: string;
  category: string;
  description: string;
}> = ({ header, date, image, category, description }) => {
  return (
    <main className={classes.wrapperCard}>
      <div className={classes.wrapperCardImg}>
        <img src={image} alt="" />
      </div>
      <div className={classes.worksDescription}>
        <div className={classes.worksHeader}>{header}</div>
        <div className={classes.worksDate}>
          <span className={classes.worksYear}>{date}</span>
          <span className={classes.worksLabel}>{category}</span>
        </div>
        <div className={classes.worksText}>{description}</div>
      </div>
    </main>
  );
};
