import { Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useUser } from "@clerk/clerk-react";
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
            h="95px"
            justifyContent="center"
            backgroundColor={
                isScrolled ? "rgba(231, 228, 216, 0.6)" : "#E7E4D8"
            }
            position="fixed"
            backdropFilter={"blur(8px)"}
            transition="background-color 0.4s ease"
            px="32px"
            zIndex={999}
        >
            <Grid width="full" maxW="1080px" gridTemplateColumns="1fr 1fr 1fr">
                <HStack>
                    <Text
                        onClick={onOpen}
                        fontWeight={400}
                        fontSize="xl"
                        textTransform="uppercase"
                    >
                        Menu
                    </Text>
                </HStack>

                <VStack>
                    <Image
                        src="/logo.svg"
                        justifyContent="center"
                        onClick={() => navigate("/")}
                    />
                </VStack>

                <HStack justifyContent="end">
                    <Text
                        onClick={() => navigate("/auth")}
                        fontWeight={400}
                        fontSize="xl"
                        textTransform="uppercase"
                    >
                        {user.isSignedIn ? "salir" : "entrar"}
                    </Text>
                </HStack>
            </Grid>
        </VStack>
    );
};
