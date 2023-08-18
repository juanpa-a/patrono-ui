import { Button, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    onOpen: () => void;
};

export const Navbar = ({ onOpen }: Props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const user = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <VStack
            w="full"
            h="70px"
            justifyContent="center"
            backgroundColor={
                isScrolled
                    ? "rgba(224, 221, 207, 0.3)"
                    : "rgba(224, 221, 207, 0.85)"
            }
            transition="background-color 0.4s ease"
            position="fixed"
            backdropFilter={"blur(80px)"}
            px="32px"
            zIndex={999}
        >
            <Grid width="full" maxW="1080px" gridTemplateColumns="1fr 1fr 1fr">
                <HStack spacing={10}>
                    <motion.div whileHover={{ scale: 1.2, fontWeight: 500 }}>
                        <Button variant="unstyled">
                            <Text
                                pointerEvents={"all"}
                                onClick={onOpen}
                                fontWeight={300}
                                fontSize="md"
                                textTransform="uppercase"
                            >
                                Menú
                            </Text>
                        </Button>
                    </motion.div>
                </HStack>

                <VStack>
                    <Image
                        src="/logo.svg"
                        justifyContent="center"
                        onClick={() => navigate("/")}
                        h={"54px"}
                    />
                </VStack>

                <HStack justifyContent="end" alignContent={"end"}>
                    <motion.div whileHover={{ scale: 1.2, fontWeight: 500 }}>
                        <Button variant="unstyled">
                            <Text
                                onClick={() => navigate("/auth")}
                                fontWeight={300}
                                fontSize="md"
                                textTransform="uppercase"
                            >
                                {user.isSignedIn ? "salir" : "entrar"}
                            </Text>
                        </Button>
                    </motion.div>
                </HStack>
            </Grid>
        </VStack>
    );
};
