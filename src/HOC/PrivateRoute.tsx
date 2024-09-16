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
            // window.history.replaceState(null, "", "/blog");
            navigate("/blog", {replace: true});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <Fragment>{children}</Fragment>;
};

export default PrivateRoute;
