import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import { Grid, Text, VStack, Image } from "@chakra-ui/react";
import { Button } from "~/components";

export const Login = () => {
    const user = useUser();
    return (
        <>
            <VStack
                justifyContent={"space-between"}
                spacing="128px"
                maxW={"1080px"}
                h={"100vh"}
                pb={16}
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
                        src={!user.isSignedIn ? "/wolf.png" : "woman.png"}
                        opacity={0.45}
                    />
                    <VStack justifyContent={"center"}>
                        <Text
                            fontSize={38}
                            fontWeight={700}
                            textTransform={"uppercase"}
                            align={"center"}
                        >
                            {!user.isSignedIn
                                ? "¡Bienvenido!"
                                : "¡hasta pronto!"}
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

                <Text fontSize={"10px"}>
                    Todos los datos proporcionados se encuentran sujetos a
                    nuestra política de privacidad, puedes acceder a ella{" "}
                    <u>aquí.</u>
                </Text>
            </VStack>
        </>
    );
};
