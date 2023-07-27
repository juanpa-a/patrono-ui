import { Button as ChakraButton } from "@chakra-ui/react";

type ButtonProps = {
    text: string;
    onClick: () => void;
    secondary?: boolean;
    disabled?: boolean;
};

export const Button = ({
    text,
    onClick,
    secondary,
    disabled = false,
}: ButtonProps) => (
    <ChakraButton
        onClick={onClick}
        disabled={disabled}
        colorScheme={"white"}
        size="md"
        fontWeight="bold"
        border={"2px solid #FA7200"}
        borderRadius="full"
        minW="190px"
        textTransform="uppercase"
        color="#E7E4D8"
        textShadow={"sm"}
        backgroundColor={secondary ? "#FFFFFF00" : "#FA7200"}
        _hover={{ bg: "#FA7200" }}
        _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
    >
        {text}
    </ChakraButton>
);
