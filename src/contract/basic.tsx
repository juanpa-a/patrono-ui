import { TextField, SelectField } from "~/components";
import { Box, Text } from "@chakra-ui/react";

export const BasicConfig = ({
    handleChange,
}: {
    handleChange: (x: any) => void;
}) => {
    return (
        <Box minW={"33vw"}>
            <Text fontWeight={800} fontSize={36} color="#f2f0ee">
                CONFIGURA TU CONTRATO
            </Text>
            <section className="w-full">
                <TextField
                    text="Fecha de inicio del contrato"
                    label="contractStartDate"
                    placeholder="hoy"
                    setValue={handleChange}
                    dark
                />
                <TextField
                    text="Fecha de fin del contrato"
                    label="contractEndDate"
                    placeholder="hoy"
                    setValue={handleChange}
                    dark
                />
                <SelectField
                    label="paymentCycle"
                    text="¿Cada cuánto se pagará la renta?"
                    onChange={handleChange}
                    options={[
                        { value: "biweekly", text: "quincenal" },
                        { value: "monthly", text: "mensual" },
                    ]}
                    dark
                />
                <TextField
                    text="¿Cuánto se pagará?"
                    label="paymentAmount"
                    placeholder="$5,000"
                    setValue={handleChange}
                    dark
                />
                <SelectField
                    text="¿Cómo se pagará?"
                    label="paymentMethod"
                    onChange={handleChange}
                    options={[
                        { value: "CASH", text: "efectivo" },
                        { value: "WIRE", text: "transferencia" },
                    ]}
                    dark
                />

            </section>
        </Box>
    );
};
