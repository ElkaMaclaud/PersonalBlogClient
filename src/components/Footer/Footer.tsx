import React from "react";
import classes from "./style/Footer.module.css";
import { Fb, Group, Insta, Linkedin } from "../../UI_Components";

const Footer = () => {
  return (
    <main className={classes.footer}>
      <div className={classes.footerContacts}>
        <Fb />
        <Insta />
        <Group />
        <Linkedin />
      </div>
      <div className={classes.footerInfo}>
        Copyright ©2020 All rights reserved{" "}
      </div>
    </main>
  );
};

export default Footer;
