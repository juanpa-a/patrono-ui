import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import { Grid, Text, VStack, Image } from "@chakra-ui/react";
import { Button } from "~/components";

export const Login = () => {
    const user = useUser();
    return (
        <>
            <VStack justifyContent={"space-between"} spacing="128px">
                <Grid px={240} templateColumns={"1fr 1fr"} mt={160}>
                    <Image src="/wolf.svg" />
                    <VStack justifyContent={"center"} spacing={12}>
                        <Text
                            fontSize={38}
                            fontWeight={700}
                            textTransform={"uppercase"}
                        >
                            {!user.isSignedIn
                                ? "Regístrate gratis y configura tu contrato ideal."
                                : "te esperamos pronto de regreso"}
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
