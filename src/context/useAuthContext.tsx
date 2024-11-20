import React, { createContext, useContext } from "react";
import { api } from "../lib/axios";
import { RouthPath } from "../routes/route-path";
import autenticaStore from "../config/AutenticaStore";
import { useNavigate } from "react-router-dom";


export type UserProps = { login: string; password: string;};

export type UserRegisterProps = { login: string; password: string; ROLE: string; };

export type TaskProps = {
    id: number;
    description: string;
    taskStatus: string;
    dateTask: string;
};

type AuthContextProps = { login: (user: UserProps) => Promise<void>; register: (userRegister: UserRegisterProps) => Promise<void>; };

// Cria um contexto
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    // Função para login
    const login = async (dateUserProps: UserProps) => {
        try {
            const response = await api.post("/auth/login", dateUserProps);
            const accessToken = response.data;

            localStorage.setItem("@taskList:accessToken", accessToken.token);
            localStorage.setItem("@taskList:accessUser", dateUserProps.login);
            autenticaStore.auth({ email: dateUserProps.login, token: accessToken.token });
            navigate(RouthPath.HOME);
        } catch (e) {
            console.log(e);
        }
    };

    // Função para registro
    const register = async (dateUserProps: UserRegisterProps) => {
        try {
            const response = await api.post("/auth/register", dateUserProps);
            const accessToken = response.data;

            localStorage.setItem("@taskList:accessToken", accessToken.token);
            localStorage.setItem("@taskList:accessUser", dateUserProps.login);
            autenticaStore.auth({ email: dateUserProps.login, token: accessToken.token });
            navigate(RouthPath.HOME);
        } catch (e) {
            console.log(e);
        }
    };



    return (
        <AuthContext.Provider value={{ login, register }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, useAuth, AuthProvider };
