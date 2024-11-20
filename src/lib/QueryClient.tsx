import { QueryClient, QueryClientProvider } from "react-query";
import { Providers } from "../context/Providers";

const queryClient = new QueryClient();
const QueryClientContext = ({ children }: { children: React.ReactNode }) => {

    return (
        <QueryClientProvider client={queryClient}>
            <Providers>
                {children}
            </Providers>
        </QueryClientProvider>
    )
}

export default QueryClientContext;