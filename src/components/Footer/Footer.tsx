import React from "react";
import classes from "./style/Footer.module.css";
import { Fb, Group, Insta, Linkedin } from "../../UI_Components";

const Footer = () => {
  return (
    <main className={classes.footer}>
      <div className={classes.footerContacts}>
        <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"><Fb /></a>
        <a href="https://www.instagram.com/"><Insta /></a>
        <a href="https://twitter.com/i/flow"><Group /></a>
        <a href="https://ru.linkedin.com/"><Linkedin /></a>
      </div>
      <div className={classes.footerInfo}>
        Copyright ©2020 All rights reserved{" "}
      </div>
    </main>
  );
};

export default Footer;
