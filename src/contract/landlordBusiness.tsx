import { TextField, SelectField } from "~/components";

import { Box, Text } from "@chakra-ui/react";

export const LandlordBusiness = ({
    handleChange,
}: {
    handleChange: (x: any) => void;
}) => {
    return (
        <Box minW={"33vw"}>
            <Text fontWeight={800} fontSize={36}>
                PERSONA MORAL
            </Text>
            <section className="w-full">
                <TextField
                    text="Nombre de empresa u organizacion"
                    label="landlordMoralName"
                    placeholder="Patrono inc"
                    setValue={handleChange}
                />
                <TextField
                    text="RFC"
                    label="landlordRFC"
                    placeholder="ABC123456"
                    setValue={handleChange}
                />
            </section>
        </Box>
    );
};
