import { ReactElement } from "react";
import { RouthPath } from "./route-path"
import Cadastro from "../pages/Singup/Cadastro";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

export type RouteElement = {
    path: RouthPath;
    element: ReactElement;
    private?: boolean
};

export const routes: RouteElement[] = [
    {
        path: RouthPath.LOGIN,
        element: <Login/>
    },
    {
        path: RouthPath.SINGUP,
        element: <Cadastro/>
    },
    {
        path: RouthPath.HOME,
        element: <Home/>,
        private: false
    }
];