import React, { FC, Fragment, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/reduxHooks";

const PrivateRoute: FC<{ children: ReactNode }> = ({
    children,
}): JSX.Element | null => {
    const page = useAppSelector((state) => state.page.page);
    const navigate = useNavigate();

    useEffect(() => {
        const currentPath = window.location.pathname;
        const storedHistory = JSON.parse(sessionStorage.getItem("history") || "[]");

        if (currentPath === "/auth" && page === "COMPLICATED") {
            if (!storedHistory.includes(currentPath)) {
                storedHistory.push(currentPath);
                sessionStorage.setItem("history", JSON.stringify(storedHistory));
            }
            navigate("/blog");
        } else {
            if (!storedHistory.includes(currentPath)) {
                storedHistory.push(currentPath);
                sessionStorage.setItem("history", JSON.stringify(storedHistory));
            }
        }

        const handlePopState = () => {
            const previousPath = storedHistory[storedHistory.length - 2];
            if (previousPath === "/registration" || previousPath === "/auth" || previousPath === "/") {
                navigate("/blog");
            } else {
                navigate(previousPath);
            }
        };

        window.onpopstate = handlePopState;

        return () => {
            window.onpopstate = null; 
        };
    }, [page, navigate]);

    return <Fragment>{children}</Fragment>;
};

export default PrivateRoute;


