import { FormControl, FormLabel, Input } from "@chakra-ui/react";

type TextFieldProps = {
    text: string;
    label: string;
    placeholder?: string;
    isPassword?: boolean;
    setValue: (x: any) => void;
};

export const TextField = ({
    text,
    label,
    placeholder,
    isPassword = false,
    setValue,
}: TextFieldProps) => {
    return (
        <FormControl my={8} w="full">
            <FormLabel mb={2} fontSize="sm" fontWeight="medium">
                <strong>{text}</strong>
            </FormLabel>
            <Input
                name={label}
                type={isPassword ? "password" : "text"}
                borderRadius="full"
                borderWidth={2}
                borderColor="#afaca5"
                bg="#f2f0ee"
                p={2}
                px="15px"
                placeholder={placeholder}
                onChange={(event) => setValue(event.target.value)}
            />
        </FormControl>
    );
};
