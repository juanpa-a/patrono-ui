import { TextField, SelectField } from "~/components";

import { Box, Text } from "@chakra-ui/react";

export const LandlordRepresentative = ({
    handleChange,
}: {
    handleChange: (x: any) => void;
}) => {
    return (
        <Box minW={"33vw"}>
            <Text fontWeight={800} fontSize={36} color="#f2f0ee">
                PROPIETARIO
            </Text>
            <section className="w-full">
                <TextField
                    text="Nombre"
                    label="landlordRepresentativeName"
                    placeholder="Pedro"
                    setValue={handleChange}
                    dark
                />
                <TextField
                    text="Apellido"
                    label="landlordRepresentativeName"
                    placeholder="Páramo"
                    setValue={handleChange}
                    dark
                />
                <SelectField
                    label="landlordRepresentativeGender"
                    text="Género"
                    onChange={handleChange}
                    options={[
                        { value: "MALE", text: "Masculino" },
                        { value: "FEMALE", text: "Femenino" },
                    ]}
                    dark
                />
                <SelectField
                    label="landlordIsMoralPerson"
                    text="¿Actua en representación de una empresa u organización?"
                    onChange={handleChange}
                    options={[
                        { value: "true", text: "Si" },
                        { value: "false", text: "No" },
                    ]}
                    dark
                />
                <SelectField
                    label="landlordNationality"
                    text="Nacionalidad"
                    onChange={handleChange}
                    options={[{ value: "MX", text: "México" }]}
                    dark
                />
            </section>
        </Box>
    );
};
