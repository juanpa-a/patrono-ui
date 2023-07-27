import { TextField, SelectField } from "~/components";
import { Box, Text } from "@chakra-ui/react";

export const BasicConfig = ({
    handleChange,
}: {
    handleChange: (x: any) => void;
}) => {
    return (
        <Box minW={"33vw"}>
            <Text fontWeight={800} fontSize={36}>
                CONFIGURA TU CONTRATO
            </Text>
            <section className="w-full">
                <TextField
                    text="Fecha de inicio del contrato"
                    label="contractStartDate"
                    placeholder="hoy"
                    setValue={handleChange}
                />
                <TextField
                    text="Fecha de fin del contrato"
                    label="contractEndDate"
                    placeholder="hoy"
                    setValue={handleChange}
                />
                <SelectField
                    label="paymentCycle"
                    text="Cada cuanto se pagara la renta"
                    onChange={handleChange}
                    options={[
                        { value: "biweekly", text: "quincenal" },
                        { value: "monthly", text: "mensual" },
                    ]}
                />
                <TextField
                    text="Monto de la renta"
                    label="paymentAmount"
                    placeholder="$5,000"
                    setValue={handleChange}
                />
                <SelectField
                    text="Metodo de pago"
                    label="paymentMethod"
                    onChange={handleChange}
                    options={[
                        { value: "CASH", text: "efectivo" },
                        { value: "WIRE", text: "transferencia" },
                    ]}
                />
                <TextField
                    text="Cantidad de deposito de garantia"
                    label="paymentGuarantee"
                    placeholder="$15,000"
                    setValue={handleChange}
                />
            </section>
        </Box>
    );
};
