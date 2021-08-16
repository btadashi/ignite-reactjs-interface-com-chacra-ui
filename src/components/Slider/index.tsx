import { Flex, Heading, Text } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, A11y]);

export function Slider() {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper 
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000
        }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            direction="column"
            w="100%"
            h="100%"
            align="center"
            justify="center"
            bgImage="url(/europe.jpg)"
            //filter="url(/europe.jpg) brightness(0.8)"
            //filter="brightness(0.5)"
            bgreapeat="no-reapeat"
            bgSize="cover"
            textAlign="center"
            bgposition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading color="white">Europa</Heading>
                <Text color="white">O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            direction="column"
            w="100%"
            h="100%"
            align="center"
            justify="center"
            bgImage="url(/europe.jpg)"
            bgrepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgposition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading color="white">Europa</Heading>
                <Text color="white">O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}