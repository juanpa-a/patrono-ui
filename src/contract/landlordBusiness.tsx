import { TextField } from "~/components";

import { Box, Text } from "@chakra-ui/react";

export const LandlordBusiness = ({
    handleChange,
}: {
    handleChange: (x: any) => void;
}) => {
    return (
        <Box minW={"33vw"}>
            <Text fontWeight={800} fontSize={36} color="#f2f0ee">
                PERSONA MORAL
            </Text>
            <section className="w-full">
                <TextField
                    text="Nombre de empresa u organizacion"
                    label="landlordMoralName"
                    placeholder="Patrono inc"
                    setValue={handleChange}
                    dark
                />
                <TextField
                    text="RFC"
                    label="landlordRFC"
                    placeholder="ABC123456"
                    setValue={handleChange}
                    dark
                />
            </section>
        </Box>
    );
};
