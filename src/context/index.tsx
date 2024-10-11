import React, { createContext, useContext, useState } from "react";

export type UserProps = {
    name: string,
    token: string
};

type AuthContextProps = {
    user: UserProps | null
    login: (user : UserProps) => void
    logout: () => void
};

// Cria um contexto
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);



// Dá o significado ao contexto
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserProps | null>({
        name: "Professor João",
        token: "123"
    });

    const login = (user : UserProps) => {
        setUser(user);

        console.log(user)
    };

    const logout = () => {
        console.log("Logout")
    };

    return (
        <AuthContext.Provider value={{ 
            user,
            login,
            logout

            }}>
            <>
                {children}
            </>
        </AuthContext.Provider>
    )
};

const useAuth = () => useContext(AuthContext);

export {AuthContext, useAuth ,AuthProvider};