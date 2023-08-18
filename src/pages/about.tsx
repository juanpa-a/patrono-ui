import {
    HStack,
    Text,
    VStack,
    Image,
    Divider,
    Button as CButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Button } from "~/components";

export const About = () => {
    const navigate = useNavigate();
    return (
        <VStack
            bg={"#1e1e1e"}
            w={"100vw"}
            minH={"100vh"}
            justifyContent={"center"}
            bgImage={"/ebg.jpeg"}
            pt={"90px"}
        >
            <HStack maxW={"1080px"}>
                <VStack align={"start"} spacing={8}>
                    <Text
                        textTransform={"uppercase"}
                        color={"#E7E4D8"}
                        fontSize={48}
                        fontWeight={700}
                    >
                        eneas
                    </Text>
                    <Divider w={32} color={"#E7E4D8"} />
                    <VStack spacing={4}>
                        <Text color={"#E7E4D8"} fontSize={16}>
                            <i>Eneas</i>© es el contrato de arrendamiento que
                            hasta un cavernícola puede configurar de forma
                            sencilla, profesional y segura. Déjate llevar por
                            nuestra potente tecnología y da forma a tu contrato
                            ideal para arrendar fincas habitacionales,
                            comerciales, industriales o rústicas.
                        </Text>
                        <Text color={"#E7E4D8"} fontSize={16}>
                            Recuerda, basta con que respondas unas cuantas
                            preguntas para que el sistema de Patrono te ayude a
                            generar —en línea y de manera inmediata— un contrato
                            único adaptado tanto a tus necesidades como a las
                            regulaciones federales y estatales que a tu caso le
                            sean aplicables.
                        </Text>
                    </VStack>
                    <VStack align={"start"}>
                        <Text fontSize={32} color={"#FA7200"} fontWeight={700}>
                            GRATIS
                        </Text>
                        <Text fontSize={12} color={"#E7E4D8"}>
                            *Por tiempo limitado.
                        </Text>
                    </VStack>
                    <Divider w={32} color={"#E7E4D8"} />
                    <VStack align={"start"} >
                        <Button text="configurar" onClick={console.log} />
                        <CButton
                            variant="unstyled"
                            onClick={() => navigate("/info")}
                        >
                            <Text fontSize={10} color={"#E7E4D8"}>
                                ¿Aún no te decides? Conoce el ADN de nuestros
                                contratos <u>aquí</u>
                            </Text>
                        </CButton>
                    </VStack>
                </VStack>
                <Image
                    src="/eneas.png"
                    w={"50%"}
                    h={"100vh"}
                    objectFit={"cover"}
                />
            </HStack>
        </VStack>
    );
};
