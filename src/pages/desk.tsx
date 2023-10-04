import { ContractFormSteps } from "~/contract/config";
import {
    Text,
    VStack,
    useSteps,
    Stack,
    Progress,
    Box,
    HStack,
    Divider,
    Image,
    IconButton,
} from "@chakra-ui/react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "~/components";
import { Fancy } from "~/templates";
import { ApiService } from "~/api";
import { useUser } from "@clerk/clerk-react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export const Desk = () => {
    const [isDirty, setIsDirty] = useState(true);
    const [contractConfig, setContractConfig] = useState({
        contractName: "",
        // property
        propertyAddress: "",
        propertyState: "",
        propertyUse: "",
        propertyIsFurnished: false,
        propertyFurniture: [],
        propertyStreet: "",
        propertyOuterNumber: "",
        propertyInnerNumber: "",
        // landlord representative
        landlordIsMoralPerson: false,
        landlordName: "",
        landlordGender: "",
        landlordNationality: "",
        landlordEmail: "",
        landlordBirthday: 0,
        landlordRepresentativeName: "",
        landlordRepresentativeGender: "",
        // landlord moral
        landlordMoralName: "",
        landlordRFC: "",
        // tenant
        tenantName: "",
        tenantEmail: "",
        tenantGender: "",
        tenantNationality: "",
        tenantBirthday: 0,
        // contract basic
        contractStartDate: "",
        contractEndDate: "",
        paymentCycle: "",
        paymentAmount: "",
        paymentMethod: "",
        guarenteeAmount: 0,
        // contract custom
        servicesAreIncluded: false,
        mantainenceIsIncluded: false,
        paymentGuarantee: 0,
        // customProhibitions: [],
        // contractIsConfidential: false,
        // thirdPartyConflictResolution: false,
        hasGuarantor: false,
    });

    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setContractConfig((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const contractSteps = ContractFormSteps(handleChange);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { activeStep, goToNext, goToPrevious } = useSteps({
        index: 0,
        count: contractSteps.length,
    });

    useEffect(() => {
        setIsDirty(true);
    }, [activeStep]);

    useEffect(() => {
        // console.log(contractConfig);
        switch (activeStep) {
            case 0:
                if (contractConfig.contractName) setIsDirty(false);
                else setIsDirty(true);
                break;
            case 1:
                if (
                    contractConfig.propertyStreet &&
                    contractConfig.propertyOuterNumber &&
                    contractConfig.propertyInnerNumber &&
                    contractConfig.propertyState &&
                    contractConfig.propertyUse &&
                    contractConfig.propertyIsFurnished
                )
                    setIsDirty(false);
                else setIsDirty(true);
                break;
            case 2:
                if (
                    contractConfig.landlordRepresentativeName &&
                    contractConfig.landlordRepresentativeGender &&
                    contractConfig.landlordIsMoralPerson &&
                    contractConfig.landlordNationality
                )
                    setIsDirty(false);
                else setIsDirty(true);
                break;
            case 3:
                if (
                    contractConfig.landlordMoralName &&
                    contractConfig.landlordRFC
                )
                    setIsDirty(false);
                else setIsDirty(true);
                break;
            case 4:
                if (
                    contractConfig.tenantName &&
                    contractConfig.tenantEmail &&
                    contractConfig.tenantGender &&
                    contractConfig.tenantNationality
                )
                    setIsDirty(false);
                else setIsDirty(true);
                break;
            case 5:
                if (
                    contractConfig.contractStartDate &&
                    contractConfig.contractEndDate &&
                    contractConfig.paymentCycle &&
                    contractConfig.paymentAmount &&
                    contractConfig.paymentMethod &&
                    contractConfig.paymentGuarantee
                )
                    setIsDirty(false);
                else setIsDirty(true);
                break;

            default:
                break;
        }
    }, [contractConfig, activeStep]);

    return (
        <VStack
            bgImage="./ebg.jpeg"
            objectFit="cover"
            backdropFilter={"blur(80px)"}
            position={"relative"}
            // w="100vw"
            minH="100vh"
        >
            <Fancy>
                <VStack pt="140px">
                    {activeStep < contractSteps.length - 1 ? (
                        <>
                            {activeStep ? (
                                <Stack
                                    spacing={5}
                                    border="1px solid #FA7200"
                                    w="100%"
                                    borderRadius="full"
                                >
                                    <Progress
                                        colorScheme="orange"
                                        size="lg"
                                        value={
                                            (activeStep * 100) /
                                            contractSteps.length
                                        }
                                        bgColor="#E7E4D8"
                                        borderRadius="full"
                                    />
                                </Stack>
                            ) : null}
                            <AnimatePresence mode="wait">
                                <FormStepper
                                    isDirty={isDirty}
                                    key={activeStep}
                                    goToPrevious={goToPrevious}
                                    goToNext={goToNext}
                                    activeStep={activeStep}
                                    finalStep={contractSteps.length - 1}
                                >
                                    {contractSteps[activeStep]?.form}
                                </FormStepper>
                            </AnimatePresence>
                        </>
                    ) : (
                        <ContractSuccess />
                    )}
                </VStack>
            </Fancy>
            <Box zIndex={1} w={"80vw"} position={"absolute"} bottom={16}>
                <HStack alignItems={"end"}>
                    <VStack alignItems={"start"} w={"full"}>
                        <Text
                            textTransform={"uppercase"}
                            fontWeight={700}
                            color="#f2f0ee"
                        >
                            Patrono // 2023
                        </Text>
                        <Divider borderColor={"#FA7200"} />
                    </VStack>
                    <Text
                        lineHeight={0.75}
                        textTransform={"uppercase"}
                        fontSize={128}
                        color="#f2f0ee"
                        fontFamily="Quattrocento"
                    >
                        {intToRoman(activeStep + 1)}.
                    </Text>
                </HStack>
            </Box>
            <Box bottom={25} left={-10} position="absolute">
                <Image
                    zIndex={2}
                    h={"35vh"}
                    src="/two-face.png"
                    fill="#E7E4D8"
                />
            </Box>
        </VStack>
    );
};

const ContractSuccess = () => {
    const { user } = useUser();

    function downloadPDF() {
        const pdfBlob = new Blob([], { type: "application/pdf" });
        const url = URL.createObjectURL(pdfBlob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "contrato-patrono.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        if (user && user.id) {
            ApiService(user.id).createContract();
        }
    }

    return (
        <HStack w="100vw" h="80vh">
            <VStack w="100vw">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                >
                    <VStack spacing={"64px"}>
                        <Text
                            fontSize={32}
                            fontWeight={700}
                            textAlign="center"
                            color="#f2f0ee"
                        >
                            TU CONTRATO <br /> ESTA LISTO
                        </Text>
                        <Button text="descargar" onClick={downloadPDF} />
                    </VStack>
                </motion.div>
            </VStack>
        </HStack>
    );
};

// const FormStepper = ({
//     goToNext,
//     children,
//     activeStep,
//     finalStep,
//     isDirty,
// }: {
//     goToNext: () => void;
//     children: React.ReactNode;
//     activeStep: number;
//     finalStep: number;
//     isDirty: boolean;
// }) => {
//     const controls = useAnimationControls();
//     useEffect(() => {
//         const restartAnimation = async (): Promise<unknown> =>
//             controls.start({
//                 opacity: 1,
//                 x: 0,
//                 transition: { duration: "0.15", ease: "easeIn" },
//             });
//         // controls.start({ scale: 2 });
//         restartAnimation()
//             .then(() => console.log(""))
//             .catch(() => console.log(""));
//     }, [controls]);
//     return (
//         <VStack p={16} minW={"50vw"}>
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={activeStep}
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -50 }}
//                     transition={{ duration: 0.15, ease: "easeIn" }}
//                 >
//                     {children}
//                 </motion.div>
//             </AnimatePresence>
//             <motion.div animate={controls} style={{ opacity: 0, x: -50 }}>
//                 <Button
//                     disabled={isDirty}
//                     text={`${
//                         activeStep === 0
//                             ? "Crear contrato"
//                             : activeStep >= finalStep
//                             ? "Terminar"
//                             : "Siguiente"
//                     }`}
//                     onClick={goToNext}
//                 />
//             </motion.div>
//         </VStack>
//     );
// };

const FormStepper = ({
    goToNext,
    goToPrevious,
    children,
    activeStep,
    finalStep,
    isDirty,
}: {
    goToNext: () => void;
    goToPrevious: () => void;
    children: React.ReactNode;
    activeStep: number;
    finalStep: number;
    isDirty: boolean;
}) => {
    const controls = useAnimationControls();

    useEffect(() => {
        const restartAnimation = async (): Promise<void> => {
            await controls.start({
                opacity: 1,
                x: 0,
                transition: { duration: 0.15, ease: "easeIn" },
            });
        };
        restartAnimation()
            .then(() => console.log(""))
            .catch(() => console.log(""));
    }, [controls]);

    useEffect(() => {
        console.log(isDirty)
    }, [isDirty])

    return (
        <HStack p={16} minW={"50vw"} minH={"50vh"} spacing={16}>
            <IconButton
                aria-label="Previous"
                icon={<FiChevronLeft />}
                onClick={goToPrevious}
                isDisabled={activeStep === 0}
                borderRadius={"full"}
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.15, ease: "easeIn" }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>

            {activeStep < finalStep && (
                <IconButton
                    aria-label="Next"
                    icon={<FiChevronRight />}
                    onClick={goToNext}
                    borderRadius={"full"}
                    // isDisabled={isDirty}
                />
            )}
        </HStack>
    );
};

function intToRoman(num: number): string {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanNumerals = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];

    let result = "";
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            num -= values[i];
            result += romanNumerals[i];
        }
    }

    return result;
}
