import {
    DrawerOverlay,
    Drawer as ChakraDrawer,
    DrawerContent,
    DrawerBody,
    VStack,
    Center,
    Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const Drawer = ({ isOpen, onClose }: Props) => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

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
        <ChakraDrawer placement={"left"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent 
                // bg={"#E7E4D8"}
                backgroundColor={
                    isScrolled ? "rgba(224, 221, 207, 0.85)" : "rgba(224, 221, 207, 0.95)"
                }
                transition="background-color 0.4s ease"
            >
                <DrawerBody
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignContent={"center"}
                    gap={"128px"}
                >
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <VStack
                            alignContent="center"
                            onClick={() => {
                                navigate("/create");
                                onClose();
                            }}
                        >
                            <Image src="/desk.png" />
                            <Center mt={3}>ESCRITORIO</Center>
                        </VStack>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <VStack
                            alignContent="center"
                            onClick={() => {
                                navigate("/favorites");
                                onClose();
                            }}
                        >
                            <Image src="/arch.png" />
                            <Center mt={3}>ARCHIVO</Center>
                        </VStack>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <VStack alignContent="center">
                            <Image src="/obs.png" />
                            <Center mt={3}>OBSERVATORIO</Center>
                        </VStack>
                    </motion.div>
                </DrawerBody>
            </DrawerContent>
        </ChakraDrawer>
    );
};
