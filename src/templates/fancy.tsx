import { VStack } from "@chakra-ui/react";
// import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const Fancy = ({ children }: Props) => {
    // const isDesktop = useBreakpointValue({ base: false, lg: true });
    // const animations = {
    //     lf: {
    //         hidden: { opacity: 0, x: -100 },
    //         visible: { opacity: 1, x: 0 },
    //     },
    //     rg: {
    //         hidden: { opacity: 0, x: 100 },
    //         visible: { opacity: 1, x: 0 },
    //     },
    // };
    return (
        <VStack w="100vw" minH="100vh">
            {/* <Box display={isDesktop ? "block" : "none"}>
                <motion.img
                    src="lf.svg"
                    alt="Left Arrow"
                    variants={animations.lf}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1.5, ease: "easeIn" }}
                />
            </Box> */}
            {children}
            {/* <Box display={isDesktop ? "block" : "none"}>
                <motion.img
                    src="rg.svg"
                    alt="Left Arrow"
                    variants={animations.rg}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1.5, ease: "easeIn" }}
                />
            </Box> */}
        </VStack>
    );
};
