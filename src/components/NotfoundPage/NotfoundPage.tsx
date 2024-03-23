import React from "react";
import classes from "./style/NotfoundPage.module.css";
import { useNavigate } from "react-router-dom";
import { Arrow } from "../../UI_Components";

const NotfoundPage = () => {
  const navigate = useNavigate();
  return (
      <div className={classes.wrapperPage}>
          <div onClick={() => navigate(-1)} className={classes.pageLink}>
              <Arrow />
              <span>Вернуться назад</span>
          </div>
          <img
              src="https://monovm.com/uploads/tinymce/Suno/2024/02/02/65bcebc3f342a-error-404-not-found.webp?1706879941049"
              alt=""
          />
      </div>
  );
};

export default NotfoundPage;
