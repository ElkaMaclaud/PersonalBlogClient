import React from "react";
import classes from "./style/Resume.module.css";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import { FETCH_FILE } from "../../store/slice";

const Resume = () => {
  const { name, avatar, file, profession, description } = useAppSelector(
    (state) => state.page.data[0].resume
  );
  const dispatch = useAppDispatch();
  const handleDownloadClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await dispatch(FETCH_FILE());
    } catch (error) {
      console.error("Ошибка при загрузке файла:", error);
    }
  };
  return (
    <div className={classes.resume}>
      <div className={classes.description}>
        <div className={classes.descriptionHeader}>
          Hi, I am {name},<br />
          {profession}
        </div>
        <div className={classes.descriptionText}>{description}</div>
        <a
          href={file}
          onClick={handleDownloadClick}
          download
          className={classes.descriptionDownload}
        >
          Download Resume
        </a>
      </div>
      <div className={classes.resumeAvatar}>
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Resume;
