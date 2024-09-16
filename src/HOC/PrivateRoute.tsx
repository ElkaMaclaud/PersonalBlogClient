import React, { FC, Fragment, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/reduxHooks";

const PrivateRoute: FC<{ children: ReactNode }> = ({
    children,
}): JSX.Element | null => {
    const page = useAppSelector((state) => state.page.page);
    const navigate = useNavigate();

    useEffect(() => {
        if (page === "COMPLICATED") {
            navigate("/blog", { replace: true });
            window.history.pushState(null, "", window.location.href);
            window.onpopstate = function (event) {
                const currentPath = window.location.pathname;
                if (currentPath === "/registration" || currentPath === "/auth") {
                    // window.history.replaceState(null, "", "/blog");
                    navigate("/blog");
                }
            };
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Fragment>{children}</Fragment>;
};

export default PrivateRoute;
