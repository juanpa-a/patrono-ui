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
                "Un contrato elaborado en patrono es más que un contrato. Es una obra de arte hecha posible gracias a la sinergía entre nuestros usuarios, tecnología y equipo de profesionistas altamente calificados para acelerar los procesos de nuestros clientes.",
            image: "/big-head.png",
        },
        {
            title: "calidad que inspira",
            subtitle:
                "La atención al detalle propia de instrumentos jurídicos de clase mundial.",
            description:
                "Un contrato elaborado en patrono es más que un contrato. Es una obra de arte hecha posible gracias a la sinergía entre nuestros usuarios, tecnología y equipo de profesionistas altamente calificados para acelerar los procesos de nuestros clientes.",
            image: "/bird.svg",
        },
        {
            title: "calidad que inspira",
            subtitle:
                "La atención al detalle propia de instrumentos jurídicos de clase mundial.",
            description:
                "Un contrato elaborado en patrono es más que un contrato. Es una obra de arte hecha posible gracias a la sinergía entre nuestros usuarios, tecnología y equipo de profesionistas altamente calificados para acelerar los procesos de nuestros clientes.",
            image: "/shield.svg",
        },
    ];

    const settings = {
        fade: true,
        infinite: true,
        // autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                <Text
                    fontSize={"48px"}
                    fontWeight={600}
                    textTransform={"uppercase"}
                    textAlign={"start"}
                    w={"full"}
                >
                    calidad que inspira
                </Text>

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

            <Box w={"full"} position={"absolute"} bottom={16}>
                <HStack alignItems={"end"}>
                    <VStack alignItems={"start"} w={"full"}>
                        <Text textTransform={"uppercase"} fontWeight={700}>
                            patrono // 2023
                        </Text>
                        <Divider borderColor={"#FA7200"} />
                    </VStack>
                    <Text
                        lineHeight={0.75}
                        textTransform={"uppercase"}
                        fontSize={128}
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

const Card = ({ subtitle, description, image }: CardProps) => {
    return (
        <VStack
            pt={"90px"}
            p={16}
            justifyContent={"center"}
            alignContent={"center"}
            maxW={"1080px"}
        >
            <HStack>
                <VStack align={"start"} spacing={8} pr={32}>
                    <Text fontSize={24} fontWeight={400}>
                        {subtitle}
                    </Text>

                    <Divider w={"33%"} borderColor={"#FA7200"} />

                    <Text fontSize={16}>{description}</Text>
                </VStack>
                <Image src={image} />
            </HStack>
        </VStack>
    );
};
