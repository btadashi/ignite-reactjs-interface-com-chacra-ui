import { Box, Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
   <Flex direction="column">
     <Header />
     <Banner />
     <TravelTypes />
     <Box w={["60px", "90px"]} mx="auto" h="2px" bg="gray.400" my={["9", "20"]} />
     <Heading
      w="100%"
      align="center"
      fontWeight="500"
      mb={["5", "14"]}
      fontSize={["lg", "3xl", "4xl"]}
     >
       Vamos nessa?<br />
       Escolha o seu continente
     </Heading>
     <Slider />
   </Flex>
  )
}
