import { ReactElement } from "react";
import { RouthPath } from "./route-path"
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";

export type RouteElement = {
    path: RouthPath;
    element: ReactElement;
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
        element: <Home/>
    }
];