import { ReactElement } from "react"
import { RoutePath } from "./router-path"
import Login from "@/app/Pages/Lg/Login"
import Cadastro from "@/app/Pages/Cad/Cadastro"
import Home from "@/app/page"

export type RouteElement = {
    path: RoutePath,
    element: ReactElement
}

export const routes : RouteElement [] = [
    {
        path: RoutePath.LOGIN,
        element: <Login/>
    },
    {
        path: RoutePath.REGISTER,
        element: <Cadastro/>
    },
    {
        path: RoutePath.HOME,
        element: <Home/>
    }
]