import { FormControl, FormLabel, Select } from "@chakra-ui/react";

type Props = {
    text: string;
    label: string;
    options: Array<{ text: string; value: string }>;
    onChange: (s: any) => void;
    dark?: boolean;
};

export const SelectField = ({
    label,
    options,
    onChange,
    text,
    dark = false,
}: Props) => {
    return (
        <FormControl my={4}>
            <FormLabel
                htmlFor={label}
                mb={2}
                fontSize="sm"
                fontWeight="medium"
                color={dark ? "#f2f0ee" : "gray.900"}
            >
                <strong>{text}</strong>
            </FormLabel>
            <Select
                id={label}
                name={label}
                rounded="full"
                borderWidth={3}
                borderColor="#96938c"
                fontSize="sm"
                bg={dark ? "#E7E4D8" : "#f2f0ee" }
                onChange={(event) => onChange(event.target.value)}
            >
                <option value="" disabled>
                    Seleccionar
                </option>
                {options.map(({ value, text }) => (
                    <option key={value} value={value}>
                        {text}
                    </option>
                ))}
            </Select>
        </FormControl>
    );
};
