import { Text, Grid, Box, useBreakpointValue } from "@chakra-ui/react";
import { useUser } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ApiService, ContractsResponse } from "~/api";
import { Contract } from "~/components";

export const Archive = () => {
    const { user } = useUser();
    const [contracts, setContracts] = useState<ContractsResponse>({});
    const [isLoading, setIsLoading] = useState(true);

    const isDesktop = useBreakpointValue({ base: false, lg: true });

    useEffect(() => {
        if (user && user.id) {
            ApiService(user.id).syncContracts(setContracts);
            setIsLoading(false);
        }
    }, [user]);

    return (
        <Box py={164}>
            {Object.values(contracts).length ? (
                <>
                    <motion.div
                        key={`title`}
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeIn" }}
                    >
                        <Text fontWeight={800} fontSize={36} mb={16}>
                            ARCHIVO
                        </Text>
                    </motion.div>
                    <Grid
                        templateColumns={
                            isDesktop ? "1fr 1fr 1fr 1fr" : "1fr 1fr"
                        }
                        gap="32px"
                        justifyContent={"center"}
                    >
                        {Object.values(contracts).map((contract, i) => (
                            <motion.div
                                key={`contract-${i}`}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.12 * (i + 1) + 0.2,
                                    ease: "easeIn",
                                }}
                            >
                                <Contract
                                    name={contract.contractName}
                                    is_active={contract.isActive}
                                    key={i}
                                />
                            </motion.div>
                        ))}
                    </Grid>
                </>
            ) : (
                <Text fontWeight={800} fontSize={36}>
                    {isLoading ? "CARGANDO..." : "AUN NO TIENES CONTRATOS..."}
                </Text>
            )}
        </Box>
    );
};
