import { TextField, SelectField } from "~/components";
import { Box, Text } from "@chakra-ui/react";

export const Basic2Config = ({
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
                    text="¿Cuánto dejará en garantía la persona u organización que hará uso de la finca que se dará en arrendamiento?"
                    label="paymentGuarantee"
                    placeholder="$15,000"
                    setValue={handleChange}
                    dark
                />
                <SelectField
                    label="landlordIsMoralPerson"
                    text="¿Quién pagará los servicios con los que vaya a contar la finca que se dará en arrendamiento?"
                    onChange={handleChange}
                    options={[
                        { value: "true", text: "Si" },
                        { value: "false", text: "No" },
                    ]}
                    dark
                />
                {/* ¿Quién asumirá el pago de su cuota de mantenimiento?
                 */}
                <SelectField
                    label="landlordIsMoralPerson"
                    text="¿Quién asumirá el pago de su cuota de mantenimiento?"
                    onChange={handleChange}
                    options={[
                        { value: "tenant", text: "Inquilino" },
                        { value: "landlord", text: "Propietario" },
                    ]}
                    dark
                />
                {/* ¿Desea que la información relacionada con el arrendamiento sea manejada como confidencial? */}
                <SelectField
                    label="landlordIsMoralPerson"
                    text="¿Desea que la información relacionada con el arrendamiento sea manejada como confidencial?"
                    onChange={handleChange}
                    options={[
                        { value: "true", text: "Si" },
                        { value: "false", text: "No" },
                    ]}
                    dark
                />
                {/* ¿Quiere que el arrendamiento se someta a los métodos alternativos de solución de controversias? */}
                <SelectField
                    label="landlordIsMoralPerson"
                    text="¿Quiere que el arrendamiento se someta a los métodos alternativos de solución de controversias?"
                    onChange={handleChange}
                    options={[
                        { value: "true", text: "Si" },
                        { value: "false", text: "No" },
                    ]}
                    dark
                />
                <SelectField
                    label="landlordIsMoralPerson"
                    text="¿Habrá fiador?"
                    onChange={handleChange}
                    options={[
                        { value: "true", text: "Si" },
                        { value: "false", text: "No" },
                    ]}
                    dark
                />
            </section>
        </Box>
    );
};
