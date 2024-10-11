import React from "react";
import { AuthProvider } from ".";

export const Providers = ({children} : {children: React.ReactNode}) => {
    return (<>
        <AuthProvider>
            {children}
        </AuthProvider>
    </>);
}