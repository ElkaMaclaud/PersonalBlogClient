import React, { CSSProperties, forwardRef, ReactNode } from "react";
import classes from "./style/Dropdown.module.css";
import { Link } from "react-router-dom";

interface DropdownProps {
    children?: ReactNode;
    list?: Array<string>;
    style?: CSSProperties;
}
export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
    ({ children, style, list }, ref) => {
        return (
            <div ref={ref} className={classes.container} style={style}>
                {children && children}
                {list &&
                    list.map((link) => {
                        return (
                            <Link to={`/${link}`} key={link}>
                                {link[0].toUpperCase() + link.slice(1)}
                            </Link>
                        );
                    })}
            </div>
        );
    }
);
