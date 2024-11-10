// RotaPrivada.js
import { Navigate } from "react-router-dom";
import { ReactElement } from "react";
import autenticaStore from "../config/AutenticaStore";
import { RouthPath } from "./route-path";
import { observer } from "mobx-react-lite";

const RotaPrivada = observer(({element}: {element: ReactElement}) => {
    return autenticaStore.estaAutenticado ? element : <Navigate to={RouthPath.LOGIN} />;
});

export default RotaPrivada;
    