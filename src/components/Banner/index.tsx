import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/backgroundBanner.png')"
      bgposition={["100% 20%", "100% 20%", "100% 30%"]}
      bgrepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
        
      >
        <Flex direction="column" >
          <Heading
            color="gray.50"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          >
            5 continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.100"
            mt="8"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "524px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Image 
          src="/airplane.png"
          alt="airplane"
          w={["300px", "300px", "300px", "430px"]}
          display={['none', 'none', 'block']}
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}