import React, { ReactElement, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./components/Registration/Auth";
import Registration from "./components/Registration/Registration";
import NotfoundPage from "./components/NotfoundPage/NotfoundPage";
import { useAppDispatch, useAppSelector } from "./store/reduxHooks";
import MainPage from "./Pages/MainPage/MainPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import PrivateRoute from "./HOC/PrivateRoute";
import LoadingPage from "./Pages/LoadingPAge/LoadingPage";
import { FETCH_ALL_DATA } from "./store/slice";
import AuthPage from "./Pages/AuthPage/AuthPage";
import InaccessiblePage from "./components/InaccessiblePage/InaccessiblePage";

function App() {
    const { page, token } = useAppSelector((state) => state.page);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (page === "LOGIN") {
            token !== null
                ? navigate("/auth", { replace: true })
                : navigate("/registration", { replace: true });
        } else if (page === "LOADING") {
            dispatch(FETCH_ALL_DATA());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);
    interface Elements {
        [key: string]: ReactElement;
    }
    if (page === "COMPLICATED") {
        const routes: Elements = {
            home: <BlogPage />,
            works: <NotfoundPage />,
            blog: <NotfoundPage />,
            contact: <NotfoundPage />,
        };
        return (
            <PrivateRoute>
                <Routes>
                    <Route path={"/"} element={<MainPage />}>
                        {Object.keys(routes).map((route) => {
                            return (
                                <Route
                                    key={Math.random().toString(36)}
                                    path={route}
                                    element={routes[route]}
                                />
                            );
                        })}
                        <Route path="*" element={<NotfoundPage />} />
                    </Route>
                </Routes>
            </PrivateRoute>
        );
    }

    if (page === "LOADING") {
        return <LoadingPage />;
    }

    return (
        <Routes>
            <Route path={"/"} element={<AuthPage />}>
                <Route
                    key={Math.random().toString(36)}
                    path={"/auth"}
                    element={<Auth />}
                />
                <Route
                    key={Math.random().toString(36)}
                    path={"/registration"}
                    element={<Registration />}
                />
                <Route path="*" element={<InaccessiblePage />} />
            </Route>
        </Routes>
    );
}

export default App;
