import { TextField, SelectField } from "~/components";

import { Box, Text } from "@chakra-ui/react";

export const Property = ({
    handleChange,
}: {
    handleChange: (x: any) => void;
}) => {
    return (
        <Box minW={"33vw"}>
            <Text fontWeight={800} fontSize={36} color="#f2f0ee">
                ¿Cuál es el domicilio de la finca que se dará en arrendamiento?
            </Text>
            <Text fontWeight={800} fontSize={16} color="#f2f0ee">
                Detalle la ubicación de la casa, el departamento, el local, el
                terreno o las construcciones que se darán arrendamiento.
            </Text>
            <section className="w-full">
                <TextField
                    text="Direccion"
                    label="propertyStreet"
                    placeholder="Av. Siempreviva"
                    setValue={handleChange}
                    dark
                />
                <TextField
                    text="Numero exterior"
                    label="propertyOuterNumber"
                    placeholder="2150"
                    setValue={handleChange}
                    dark
                />
                <TextField
                    text="Numero interior"
                    label="propertyInnerNumber"
                    placeholder="42-B"
                    setValue={handleChange}
                    dark
                />
                <SelectField
                    label="propertyState"
                    text="¿En qué condición se encuentra?"
                    onChange={handleChange}
                    options={[
                        { value: "BAD", text: "Malo" },
                        { value: "MID", text: "Regular" },
                        { value: "GOOD", text: "Bueno" },
                    ]}
                    dark
                />
                <SelectField
                    label="propertyUse"
                    text="¿Qué uso se le dará?"
                    onChange={handleChange}
                    options={[
                        { value: "RESIDENTIAL", text: "Residencial" },
                        { value: "COMERCIAL", text: "Comercial" },
                    ]}
                    dark
                />
                <SelectField
                    label="propertyIsFurnished"
                    text="¿Incluirá mobiliario que deseé inventariar?"
                    onChange={handleChange}
                    options={[
                        { value: "false", text: "No" },
                        { value: "true", text: "Si" },
                    ]}
                    dark
                />
            </section>
        </Box>
    );
};
