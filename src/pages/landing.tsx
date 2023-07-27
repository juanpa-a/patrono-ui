import { useEffect, useState } from "react";
import { Box, VStack, Text, Image, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Button } from "~/components";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const [isMuted, setMute] = useState(true);
    const toggleMute = () => setMute(!isMuted);
    const navigate = useNavigate();
    const user = useUser();

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <VStack spacing={0} scrollSnapType="y mandatory">
            <Box
                h="100vh"
                w="100vw"
                backgroundImage="/bg.jpg"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                scrollSnapAlign="center"
            >
                <motion.div
                    initial={{ opacity: 0, y: -150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.25, ease: "linear" }}
                >
                    <VStack
                        spacing="85px"
                        justifyContent="center"
                        h="100vh"
                        textAlign="center"
                    >
                        <VStack spacing="16px">
                            <Text
                                color="#E7E4D8"
                                fontWeight={700}
                                fontSize={"32px"}
                            >
                                EL CONTRATO <br /> QUE NO TIENE FRONTERAS
                            </Text>
                            <Image src="/olive.svg" fill="#E7E4D8" />
                            <Text color="#E7E4D8">
                                Introduciendo a Eneas, el contrato de
                                arrendamiento que puedes configurar en línea en
                                minutos.
                            </Text>
                        </VStack>
                        <HStack spacing="20px">
                            <Button
                                text="Configurar"
                                // secondary
                                onClick={() => navigate("/create")}
                            />
                            <Button
                                text="Descubrir"
                                secondary
                                onClick={console.log}
                            />
                        </HStack>
                    </VStack>
                </motion.div>
            </Box>
            <Box scrollSnapAlign="center">
                <video
                    onClick={toggleMute}
                    autoPlay
                    muted={isMuted}
                    loop
                    style={{
                        width: "100vw",
                        height: "100vh",
                        objectFit: "cover",
                    }}
                    src="/video.mp4"
                />
            </Box>
        </VStack>
    );
};
