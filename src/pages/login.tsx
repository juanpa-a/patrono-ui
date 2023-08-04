import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import { Grid, Text, VStack, Image, Box } from "@chakra-ui/react";
import { Button } from "~/components";

export const Login = () => {
    const user = useUser();
    return (
        <>
            <VStack
                justifyContent={"space-between"}
                spacing="128px"
                maxW={"1080px"}
                h={"99vh"}
                mb={16}
            >
                <Grid
                    templateColumns={"1fr 1fr"}
                    mt={160}
                    w={"full"}
                    h={"full"}
                >
                    <Image
                        boxSize={"full"}
                        objectFit={"cover"}
                        src="/wolf.png"
                        opacity={0.6}
                    />

                    <VStack justifyContent={"center"}>
                        <Text
                            fontSize={38}
                            fontWeight={700}
                            textTransform={"uppercase"}
                            align={"center"}
                        >
                            {!user.isSignedIn
                                ? "Regístrate gratis y configura tu contrato ideal."
                                : "que chingue a su madre el america"}
                        </Text>

                        {!user.isSignedIn ? (
                            <SignInButton mode="modal">
                                <Button text="Entrar" onClick={console.log} />
                            </SignInButton>
                        ) : (
                            <SignOutButton>
                                <Button text="salir" onClick={console.log} />
                            </SignOutButton>
                        )}
                    </VStack>
                </Grid>

                <Text>
                    Todos los datos proporcionados se encuentran sujetos a
                    nuestra política de privacidad, puedes acceder a ella{" "}
                    <u>aquí.</u>
                </Text>
            </VStack>
        </>
    );
};
