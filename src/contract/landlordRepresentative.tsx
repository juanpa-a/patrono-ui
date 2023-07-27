import { TextField, SelectField } from "~/components";

import { Box, Text } from "@chakra-ui/react";

export const LandlordRepresentative = ({
    handleChange,
}: {
    handleChange: (x: any) => void;
}) => {
    return (
        <Box minW={"33vw"}>
            <Text fontWeight={800} fontSize={36}>
                PROPIETARIO
            </Text>
            <section className="w-full">
                <TextField
                    text="Nombre"
                    label="landlordRepresentativeName"
                    placeholder="Andrew"
                    setValue={handleChange}
                />
                <SelectField
                    label="landlordRepresentativeGender"
                    text="Genero"
                    onChange={handleChange}
                    options={[
                        { value: "MALE", text: "Masculino" },
                        { value: "FEMALE", text: "Femenino" },
                    ]}
                />
                <SelectField
                    label="landlordIsMoralPerson"
                    text="Actua en representacion de una empresa u organizacion?"
                    onChange={handleChange}
                    options={[
                        { value: "true", text: "Si" },
                        { value: "false", text: "No" },
                    ]}
                />
                <SelectField
                    label="landlordNationality"
                    text="Nacionalidad"
                    onChange={handleChange}
                    options={[{ value: "MX", text: "México" }]}
                />
            </section>
        </Box>
    );
};
