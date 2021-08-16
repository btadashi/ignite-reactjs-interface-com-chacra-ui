import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export function Infos() {
  return (
    <Flex
      align="center"
      justify="space-between"
    >
      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]} >
        <Heading 
          fontSize={["2xl", "5xl"]} 
          color="yellow.400" 
          fontWeight="500"
        >
          50
        </Heading>
        <Text
          fontWeight="600"
          fontSize={["md", "xl"]}
          color="gray.400"
        >
          países
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]} >
        <Heading 
          fontSize={["2xl", "5xl"]} 
          color="yellow.400" 
          fontWeight="500"
        >
          60
        </Heading>
        <Text
          fontWeight="600"
          fontSize={["md", "xl"]}
          color="gray.400"
        >
          cidades
        </Text>
      </Flex>
      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]} >
        <Heading 
          fontSize={["2xl", "5xl"]} 
          color="yellow.400" 
          fontWeight="500"
        >
          27
        </Heading>
        <Text
          fontWeight="600"
          fontSize={["md", "xl"]}
          color="gray.400"
        >
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon 
                  cursor="pointer" 
                  as={RiInformationLine} 
                  ml="1"
                  color="gray.200" 
                  w={["10px", "18px"]}
                  h={["10px", "18px"]} 
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.300" color="white" > 
              <PopoverArrow bg="gray.300" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="md">
                Alemanha, Espanha, Dinamarca, Itália, Inglaterra
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>

    </Flex>
  );
}