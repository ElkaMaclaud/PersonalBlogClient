import React, { useRef, useState } from "react";
import classes from "./style/Header.module.css";
import { Burger, Cross, Dropdown } from "../../UI_Components";
import { Link } from "react-router-dom";

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const list = ["works", "blog", "contact"];
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.header}>
        <div
          className={classes.headerMobile}
          onClick={() => setActive(!active)}
        >
          {active ? (
            <div>
              <Cross />
              <Dropdown ref={ref} list={list} />
            </div>
          ) : (
            <Burger />
          )}
        </div>
        {list.map((link) => {
          return (
            <Link to={`/${link}`} key={link}>
              {link[0].toUpperCase() + link.slice(1)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
