import { SelectField } from "~/components";

import { Box, Text } from "@chakra-ui/react";

export const Property2 = ({
    handleChange,
}: {
    handleChange: (x: any) => void;
}) => {
    return (
        <Box minW={"33vw"}>
            <Text fontWeight={800} fontSize={36} color="#f2f0ee">
                ¿Cómo se encuentra y qué uso tendrá a la finca que se dará
                en arrendamiento?
            </Text>
            <Text fontWeight={500} fontSize={16} color="#f2f0ee">
                <i>
                    Señale el estado y el destino que tendrá la finca que
                    se dará en arrendamiento.
                </i>
            </Text>
            <section className="w-full">
                <SelectField
                    label="propertyState"
                    text="¿Como se encuentra la finca que se dara en arrendamineto?"
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
