import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Container } from "~/templates";
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
