import { Text, VStack, Image } from "@chakra-ui/react";
import { BasicConfig } from "./basic";
import { Basic2Config } from "./basic2";
import { CustomConfig } from "./custom";
import { LandlordBusiness } from "./landlordBusiness";
import { LandlordRepresentative } from "./landlordRepresentative";
import { Property } from "./property";
import { Tenant } from "./tenant";

import { TextField } from "../components/text.field";
import { Property2 } from "./property2";

export const ContractFormSteps = (handleChange: (x: any) => void) => [
    {
        form: (
            <VStack spacing={4} minW={"33vw"}>
                <Text mb={8} fontWeight={800} fontSize={36} color="#f2f0ee">
                    CONTRATO ENEAS
                </Text>
                <Image src="/olive.svg" />

                <TextField
                    text="¿Qué nombre le quieres dar al contrato?"
                    label="contractName"
                    placeholder="Mi contrato con Patrono"
                    setValue={handleChange}
                    dark={true}
                />
            </VStack>
        ),
    },
    {
        title: "Break",
        description: "",
        form: (
            <VStack mx={"auto"} spacing={4} minW={"33vw"} minH={"100%"}>
                <Text  fontWeight={800} fontSize={36} color="#f2f0ee">
                    BREAK
                </Text>
            </VStack>
        ),
        // form: <LandlordRepresentative handleChange={handleChange} />,
    },
    {
        title: "Propiedad",
        description: "",
        form: <Property handleChange={handleChange} />,
    },
    {
        title: "Propiedad",
        description: "",
        form: <Property2 handleChange={handleChange} />,
    },
    {
        title: "Propietario",
        description: "",
        form: <LandlordRepresentative handleChange={handleChange} />,
    },
    {
        title: "Informacion Fiscal",
        description: "",
        form: <LandlordBusiness handleChange={handleChange} />,
    },
    {
        title: "Inquilino",
        description: "",
        form: <Tenant handleChange={handleChange} />,
    },
    {
        title: "Configuración basica",
        description: "",
        form: <BasicConfig handleChange={handleChange} />,
    },
    {
        title: "Configuración basica",
        description: "",
        form: <Basic2Config handleChange={handleChange} />,
    },
    {
        title: "Configuración personalizada",
        description: "",
        form: <CustomConfig handleChange={handleChange} />,
    },
];

// const contractInfo = {
//     // property
//     propertyAddress: "",
//     propertyState: "",
//     propertyUse: "",
//     propertyIsFurnished: false,
//     propertyFurniture: [],
//     // landlord representative
//     landlordIsMoralPerson: false,
//     landlordName: "",
//     landlordGender: "",
//     landlordNationality: "",
//     landlordEmail: "",
//     landlordBirthday: 0,
//     // landlord moral
//     landlordMoralName: "",
//     landlordRFC: "",
//     // tenant
//     tenantName: "",
//     tenantEmail: "",
//     tenantGender: "",
//     tenantNationality: "",
//     tenantBirthday: 0,
//     // contract basic
//     contractStartDate: "",
//     contractEndDate: "",
//     paymentCycle: "",
//     paymentAmount: "",
//     paymentMethod: "",
//     guarenteeAmount: 0,
//     // contract custom
//     servicesAreIncluded: false,
//     mantainenceIsIncluded: false,
//     // customProhibitions: [],
//     // contractIsConfidential: false,
//     // thirdPartyConflictResolution: false,
//     hasGuarantor: false,
// };
