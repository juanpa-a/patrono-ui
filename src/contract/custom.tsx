import { SelectField } from "../components/selec.field";
import { Text, Box } from "@chakra-ui/react";

export const CustomConfig = ({
    handleChange,
}: {
    handleChange: (x: any) => any;
}) => {
    return (
        <Box minW={"33vw"}>
            <Text fontWeight={800} fontSize={36}>
                YA CASI TERMINAMOS
            </Text>
            <section className="w-full">
                <SelectField
                    text="Los servicios estan incluidos?"
                    label="paymentCycle"
                    onChange={handleChange}
                    options={[
                        { value: "true", text: "Si" },
                        { value: "false", text: "No" },
                    ]}
                />
                <SelectField
                    text="El mantenimiento esta incluido?"
                    label="paymentCycle"
                    onChange={handleChange}
                    options={[
                        { value: "true", text: "Si" },
                        { value: "false", text: "No" },
                    ]}
                />
                <SelectField
                    text="Hay fiador?"
                    label="paymentCycle"
                    onChange={handleChange}
                    options={[
                        { value: "true", text: "Si" },
                        { value: "false", text: "No" },
                    ]}
                />
                {/* <TextField
          text=""
          label="Primer nomber"
          placeholder="Andrew"
          setValue={() => console.log("hi")}
        /> */}
            </section>
        </Box>
    );
};
