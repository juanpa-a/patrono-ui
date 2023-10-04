import { TextField } from "~/components";

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
            <Text fontWeight={500} fontSize={16} color="#f2f0ee">
                <i>
                    Detalle la ubicación de la casa, el departamento, el local,
                    el terreno o las construcciones que se darán arrendamiento.
                </i>
            </Text>
            <section className="w-full">
                <TextField
                    text="Direccion"
                    label="propertyStreet"
                    placeholder="Calle Progreso"
                    setValue={handleChange}
                    dark
                />
                <TextField
                    text="Número exterior"
                    label="propertyOuterNumber"
                    placeholder="25"
                    setValue={handleChange}
                    dark
                />
                <TextField
                    text="Número interior"
                    label="propertyInnerNumber"
                    placeholder="(opcional)"
                    setValue={handleChange}
                    dark
                />
                <TextField
                    text="Código postal"
                    label="propertyInnerNumber"
                    placeholder="28450"
                    setValue={handleChange}
                    dark
                />
                <TextField
                    text="Estado"
                    label="propertyInnerNumber"
                    placeholder="Colima"
                    setValue={handleChange}
                    dark
                />
                <TextField
                    text="Municipio"
                    label="propertyInnerNumber"
                    placeholder="Comala"
                    setValue={handleChange}
                    dark
                />
            </section>
        </Box>
    );
};
