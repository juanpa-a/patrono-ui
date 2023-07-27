import { ClerkProvider } from "@clerk/clerk-react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Routes } from "./routes";

const clerkPubKey = import.meta.env.VITE_CLERK;

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "#f2f0ee",
            },
        },
    },
});

export const App = () => {
    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <ChakraProvider theme={theme}>
                <Routes />
            </ChakraProvider>
        </ClerkProvider>
    );
};
