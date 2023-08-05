import {
    BrowserRouter,
    Routes as BrowserRoutes,
    Navigate,
    Route,
} from "react-router-dom";
import { Archive, Login, Landing, Desk, About } from "./pages";
import { Container } from "./templates";
import { useUser } from "@clerk/clerk-react";
import { ReactNode } from "react";

export const Routes = () => {
    const { isSignedIn } = useUser();

    const Protected = (children: ReactNode) =>
        isSignedIn ? children : <Navigate to="/auth" />;

    return (
        <BrowserRouter basename="/">
            <Container>
                <BrowserRoutes>
                    <Route path="/" element={<Landing />} />
                </BrowserRoutes>
                <BrowserRoutes>
                    <Route path="/auth" element={<Login />} />
                </BrowserRoutes>
                <BrowserRoutes>
                    <Route path="/about" element={<About />} />
                </BrowserRoutes>
                <BrowserRoutes>
                    <Route path="/create" element={Protected(<Desk />)} />
                </BrowserRoutes>
                <BrowserRoutes>
                    <Route path="/favorites" element={Protected(<Archive />)} />
                </BrowserRoutes>
            </Container>
        </BrowserRouter>
    );
};
