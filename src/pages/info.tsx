import {
    Divider,
    HStack,
    Text,
    VStack,
    Image,
    Box,
    Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

export const Info = () => {
    const config = [
        {
            title: "calidad que inspira",
            subtitle:
                "La atención al detalle propia de instrumentos jurídicos de clase mundial.",
            description:
                "Un contrato elaborado en Patrono es más que un contrato. Es una obra de arte hecha posible gracias a la sinergía entre nuestros usuarios, tecnología y equipo de profesionistas altamente calificados para acelerar los procesos de nuestros clientes.",
            image: "/big-head.png",
        },
        {
            title: "TECNOLOGÍA QUE LIBERA",
            subtitle:
                "La accesibilidad a la práctica legal que demandan nuestros tiempos.",
            description:
                "Patrono fue diseñado con un solo fin: empoderar a sus usuarios para que puedan ejercitar sus derechos de forma directa, profesional y segura. En consecuencia, todo contrato en la plataforma puede ser configurado por cualquier persona (sin importar sus conocimientos o capacidades).",
            image: "/bird.svg",
        },
        {
            title: "ACOMPAÑAMIENTO QUE ASEGURA",
            subtitle: "La vigilancia necesaria para que las cosas sucedan.",
            description:
                "En Patrono sabemos que la gestión responsable es el antídoto más eficaz para combatir el deterioro del valor de un contrato. Es por eso que desarrollamos el primer observatorio digital de seguimiento legal gratuito de Iberoamérica, un espacio donde nuestros usuarios pueden supervisar el debido cumplimiento de las obligaciones pactadas en los contratos configurados en la plataforma.",
            image: "/shield.svg",
        },
    ];

    const settings = {
        fade: true,
        speed: 800,
    };

    const [slider, setSlider] = useState<Slider | null>(null);

    const [count, setCount] = useState(1);

    const next = () => {
        slider?.slickNext();
        if (count >= config.length) {
            setCount(1);
        } else {
            setCount(count + 1);
        }
    };
    const prev = () => {
        slider?.slickPrev();
        if (count === 1) {
            setCount(config.length);
        } else {
            setCount(count - 1);
        }
    };

    return (
        <Box
            pt={"90px"}
            position={"relative"}
            minH={"100vh"}
            maxW={"1080px"}
            overflow={"hidden"}
            py={32}
        >
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <HStack>
                <HStack spacing={4}>
                    <Icon
                        as={FaArrowLeft}
                        color="#FA7200"
                        onClick={() => prev()}
                    />
                    <Icon
                        as={FaArrowRight}
                        color="#FA7200"
                        onClick={() => next()}
                    />
                </HStack>
            </HStack>
            <Box>
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {config.map(
                        ({ title, subtitle, description, image }, index) => {
                            return (
                                <Card
                                    title={title}
                                    subtitle={subtitle}
                                    description={description}
                                    image={image}
                                    page={index}
                                />
                            );
                        }
                    )}
                </Slider>
            </Box>

            <Box w={"full"} position={"absolute"} bottom={16}>
                <HStack alignItems={"end"}>
                    <VStack alignItems={"start"} w={"full"}>
                        <Text textTransform={"uppercase"} fontWeight={700}>
                            Patrono // 2023
                        </Text>
                        <Divider borderColor={"#FA7200"} />
                    </VStack>
                    <Text
                        lineHeight={0.75}
                        textTransform={"uppercase"}
                        fontSize={128}
                        fontFamily="Quattrocento"
                    >
                        {intToRoman(count)}.
                    </Text>
                </HStack>
            </Box>
        </Box>
    );
};

type CardProps = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    page: number;
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

const Card = ({ title, subtitle, description, image }: CardProps) => {
    return (
        <VStack
            pt={"90px"}
            justifyContent={"center"}
            alignContent={"center"}
            maxW={"1080px"}
        >
            <Text
                fontSize={"48px"}
                fontWeight={600}
                textTransform={"uppercase"}
                textAlign={"start"}
                w={"full"}
            >
                {title}
            </Text>
            <HStack>
                <VStack align={"start"} spacing={8} pr={32}>
                    <Text fontSize={24} fontWeight={400}>
                        {subtitle}
                    </Text>

                    <Divider w={"33%"} borderColor={"#FA7200"} />

                    <Text fontSize={16} fontFamily="Quattrocento">
                        {description}
                    </Text>
                </VStack>
                <Image src={image} />
            </HStack>
        </VStack>
    );
};
