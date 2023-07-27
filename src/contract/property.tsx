import { TextField, SelectField } from "~/components";

import { Box, Text } from "@chakra-ui/react";

export const Property = ({
    handleChange,
}: {
    handleChange: (x: any) => void;
}) => {
    return (
        <Box minW={"33vw"}>
            <Text fontWeight={800} fontSize={36}>
                CONTRATO ENEAS
            </Text>
            <section className="w-full">
                <TextField
                    text="Direccion"
                    label="propertyStreet"
                    placeholder="Av. Siempreviva"
                    setValue={handleChange}
                />
                <TextField
                    text="Numero exterior"
                    label="propertyOuterNumber"
                    placeholder="2150"
                    setValue={handleChange}
                />
                <TextField
                    text="Numero interior"
                    label="propertyInnerNumber"
                    placeholder="42-B"
                    setValue={handleChange}
                />
                <SelectField
                    label="propertyState"
                    text="Estado de la propiedad"
                    onChange={handleChange}
                    options={[
                        { value: "BAD", text: "Malo" },
                        { value: "MID", text: "Regular" },
                        { value: "GOOD", text: "Bueno" },
                    ]}
                />
                <SelectField
                    label="propertyUse"
                    text="Que uso se le dara"
                    onChange={handleChange}
                    options={[
                        { value: "RESIDENTIAL", text: "Residencial" },
                        { value: "COMERCIAL", text: "Comercial" },
                    ]}
                />
                <SelectField
                    label="propertyIsFurnished"
                    text="La propiedad esta amueblada?"
                    onChange={handleChange}
                    options={[
                        { value: "false", text: "No" },
                        { value: "true", text: "Si" },
                    ]}
                />
            </section>
        </Box>
    );
};
