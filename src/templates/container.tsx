import { VStack, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Drawer, Footer, Navbar } from "~/components";

export const Container = ({ children }: { children: ReactNode }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <VStack spacing={0} justifyContent="space-between">
            <Navbar onOpen={onOpen} />
            <Drawer isOpen={isOpen} onClose={onClose} />
            <VStack spacing={0} minH="100vh" justifyContent="center">
                {children}
            </VStack>
            <Footer />
        </VStack>
    );
};
