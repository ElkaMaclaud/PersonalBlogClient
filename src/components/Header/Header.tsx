import React, { useRef, useState } from "react";
import classes from "./style/Header.module.css";
import { Burger, Cross, Dropdown } from "../../UI_Components";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../store/reduxHooks";
import { SET_PAGE } from "../../store/slice";

const Header = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);
    const list = ["works", "blog", "contact", "log out"];
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

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
                    if (link === "log out") {
                        return (
                            <div
                                className={
                                    pathname.replace("/", "") === link
                                        ? classes.active
                                        : ""
                                }
                                key={link}
                                onClick={() => dispatch(SET_PAGE("LOGIN"))}
                            >
                                {link[0].toUpperCase() + link.slice(1)}
                            </div>
                        );
                    }
                    return (
                        <Link
                            to={`/${link}`}
                            key={link}
                            className={
                                pathname.replace("/", "") === link
                                    ? classes.active
                                    : ""
                            }
                        >
                            {link[0].toUpperCase() + link.slice(1)}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Header;
