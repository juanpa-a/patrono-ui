import { TextField, SelectField } from "~/components";
import { Box, Text } from "@chakra-ui/react";

export const Tenant = ({
    handleChange,
}: {
    handleChange: (x: any) => void;
}) => {
    return (
        <Box minW={"33vw"}>
            <Text fontWeight={800} fontSize={36} color="#f2f0ee">
                INQUILINO
            </Text>
            <section className="w-full">
                <TextField
                    text="Nombre"
                    label="tenantName"
                    placeholder="Pedro"
                    setValue={handleChange}
                    dark
                />
                <TextField
                    text="Email"
                    label="tenantEmail"
                    placeholder="pedro@patrono.mx"
                    setValue={handleChange}
                    dark
                />
                <SelectField
                    label="tenantGender"
                    text="Genero"
                    onChange={handleChange}
                    options={[
                        { value: "MALE", text: "Masculino" },
                        { value: "FEMALE", text: "Femenino" },
                    ]}
                    dark
                />
                <SelectField
                    label="tenantNationality"
                    text="Nacionalidad"
                    onChange={handleChange}
                    options={[{ value: "MX", text: "México" }]}
                    dark
                />
            </section>
        </Box>
    );
};
