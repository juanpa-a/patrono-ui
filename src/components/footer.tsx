import {
    Divider,
    Grid,
    HStack,
    Icon,
    Text,
    VStack,
    Image,
} from "@chakra-ui/react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <VStack p={16} w="full" backgroundColor="#1E1E1E">
            <VStack w="full" maxW="1080px" mb="15px">
                <Image src="/legal-logo.png" h={29} />
                <Divider my={"32px"} borderColor="#f2f0ee" borderWidth={"1px"} />
                <Text color="#f2f0ee" fontSize={"14px"}>
                    <i>
                        aude, hospes, contemnere opes et te quoque dignum |
                        finge deo, rebusque veni non asper egenis. (Aen. 8.
                        364-5)
                    </i>
                </Text>
                <Divider my={"32px"} borderColor="#f2f0ee" borderWidth={"1px"} />
                <Grid w="full" gridTemplateColumns="1fr 1fr 1fr">
                    <HStack>
                        <Icon as={FaYoutube} color="#f2f0ee" />
                        <Icon as={FaFacebook} color="#f2f0ee" />
                        <Icon as={FaInstagram} color="#f2f0ee" />
                    </HStack>
                    <VStack align="center">
                        <Text
                            fontSize={"10px"}
                            color="#f2f0ee"
                            align={"center"}
                        >
                            Condiciones de uso ㅤㅤㅤ Política de privacidad
                        </Text>
                    </VStack>
                    <Text color="#f2f0ee" fontSize={"10px"} align={"end"}>
                        © 2023 PATRONO. Todos los derechos reservados.
                    </Text>
                </Grid>
            </VStack>
        </VStack>
    );
};
