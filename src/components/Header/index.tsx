import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/';

  return (
    <Flex
      bg="white"
      as="header"
      w="100%"
      h={["50px", "100px"]}
      mx="auto"
      px="1rem"
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW={1160}
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >

        { notHomePage && (
          <Link href="/" >
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 32]} justifySelf="start" />
            </a>
          </Link>
        ) }

        <Image
          w={[81, 184]} 
          src="/logo.svg" 
          alt="World Trip" 
          justifySelf="center"
          gridColumn="2"

        />
      </Grid>
    </Flex>
  );
}