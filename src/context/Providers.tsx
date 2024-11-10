import React from "react";
import { AuthProvider } from "./useAuthContext";
import { FetchProvider } from "./useFetchTaskContext";
export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (<>
        <AuthProvider>
            <FetchProvider>
                {children}
            </FetchProvider>
        </AuthProvider>
    </>);
}
