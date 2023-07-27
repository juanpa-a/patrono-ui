import { HStack, VStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = {
    name: string;
    is_active: boolean;
};

export const Contract = ({ name, is_active }: Props) => {
    return (
        <motion.div
            key={`contract-${name}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.05, ease: "linear" }}
        >
            <VStack>
                <VStack
                    w="164px"
                    h="208px"
                    borderRadius="11px"
                    justifyContent="center"
                    border="2px #DBD8CC solid"
                >
                    <Image src="/archive-logo.png" />
                </VStack>
                <HStack>
                    <Text
                        fontSize="32px"
                        color={`${is_active ? "#80C73F" : "#e56e56"}`}
                    >
                        •
                    </Text>
                    <Text>{name}</Text>
                </HStack>
            </VStack>
        </motion.div>
    );
};
