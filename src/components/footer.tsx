import { Box, Divider, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <VStack p={16} w="full" backgroundColor="#1E1E1E">
            <VStack w="full" maxW="1080px">
                <Text color="#f2f0ee">
                    aude, hospes, contemnere opes et te quoque dignum | finge
                    deo, rebusque veni non asper egenis. (Aen. 8. 364-5)
                </Text>
                <Divider mt={"64px"} mb={"48px"} color="#f2f0ee" />
                <HStack w="full" justifyContent="space-between">
                    <HStack>
                        <Icon as={FaYoutube} color="#f2f0ee" />
                        <Icon as={FaFacebook} color="#f2f0ee" />
                        <Icon as={FaInstagram} color="#f2f0ee" />
                    </HStack>
                    <HStack spacing={18}>
                        <Text color="#f2f0ee">Condiciones de uso</Text>
                        <Text color="#f2f0ee">Política de privacidad</Text>
                    </HStack>
                    <Text color="#f2f0ee">
                        © 2022 PATRONO. Todos los derechos reservados.
                    </Text>
                </HStack>
            </VStack>
        </VStack>
    );
};
