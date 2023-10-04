import { FormControl, FormLabel, Input } from "@chakra-ui/react";

type TextFieldProps = {
    text: string;
    label: string;
    placeholder?: string;
    isPassword?: boolean;
    setValue: (x: any) => void;
    dark?: boolean;
};

export const TextField = ({
    text,
    label,
    placeholder,
    isPassword = false,
    setValue,
    dark = false,
}: TextFieldProps) => {
    return (
        <FormControl my={8} w="full">
            <FormLabel
                mb={2}
                fontSize="sm"
                fontWeight="medium"
                color={dark ? "#f2f0ee" : ""}
            >
                <strong>{`${text}:g`}</strong>
            </FormLabel>
            <Input
                name={label}
                type={isPassword ? "password" : "text"}
                borderRadius="full"
                borderWidth={3}
                borderColor="#96938c"
                bg={dark ? "#E7E4D8" : "#f2f0ee"}
                p={2}
                px="15px"
                placeholder={placeholder}
                onChange={(event) => setValue(event.target.value)}
            />
        </FormControl>
    );
};
