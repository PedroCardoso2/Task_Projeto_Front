import React, { createContext, useContext } from "react";
import { api } from "../lib/axios";

export type UserProps = {
    login: string,
    password: string
};

export type UserRegisterProps = {
    login: string
    password: string
    ROLE: string
};

type AuthContextProps = {
    login: (user : UserProps) => Promise<void>    
    register: (userRegister: UserRegisterProps) => Promise<void>   
};

// Cria um contexto
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);



// Dá o significado ao contexto
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // Axios - Login
    const login = async (data : UserProps) => {
        api
        .post("/auth/login", data)
        .then((response) => {
            const accessToken = response.data;
            
            localStorage.setItem("@taskList:accessToken", accessToken);
        })
        .catch((e) => {
            console.log(e);
        })
        
    };

    // Axios - Register
    const register = async (data : UserRegisterProps) => {
        api
        .post("/auth/register", data)
        .then((response) => {
            const accessToken = response.data;
            
            localStorage.setItem("@taskList:accessToken", accessToken);
        })
        .catch((e) => {
            console.log(e);
        })
    };


    return (
        <AuthContext.Provider value={{ 
            login,
            register
            }}>
            <>
                {children}
            </>
        </AuthContext.Provider>
    )
};

const useAuth = () => useContext(AuthContext);

export {AuthContext, useAuth ,AuthProvider};