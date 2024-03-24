import React, { CSSProperties, forwardRef, ReactNode } from "react";
import classes from "./style/Dropdown.module.css";
import { useNavigate } from "react-router-dom";

interface DropdownProps {
    children?: ReactNode;
    list?: Array<string>;
    style?: CSSProperties;
}
export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
    ({ children, style, list }, ref) => {
        const navigate = useNavigate();
        return (
            <div ref={ref} className={classes.container} style={style}>
                {children && children}
                {list && (
                    <div className={classes.linkWrapper}>
                        {list.map((link) => {
                            return (
                                <div
                                    className={classes.link}
                                    key={link}
                                    onClick={() => navigate(`/${link}`)}
                                >
                                    {link[0].toUpperCase() + link.slice(1)}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
);
