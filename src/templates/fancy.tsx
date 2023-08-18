import { VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const Fancy = ({ children }: Props) => {
    return (
        <VStack w="100vw" zIndex={999}>
            {children}
        </VStack>
    );
};
