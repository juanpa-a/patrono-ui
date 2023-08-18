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
    colors: {
        orange: {
            500: "#FA7200",
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
