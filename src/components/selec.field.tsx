import { FormControl, FormLabel, Select } from "@chakra-ui/react";

type Props = {
    text: string;
    label: string;
    options: Array<{ text: string; value: string }>;
    onChange: (s: any) => void;
};

export const SelectField = ({ label, options, onChange, text }: Props) => {
    return (
        <FormControl my={4}>
            <FormLabel
                htmlFor={label}
                mb={2}
                fontSize="sm"
                fontWeight="medium"
                color="gray.900"
            >
                <strong>{text}</strong>
            </FormLabel>
            <Select
                id={label}
                name={label}
                rounded="full"
                borderWidth={2}
                fontSize="sm"
                borderColor="#afaca5"
                bg="#f2f0ee"
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
