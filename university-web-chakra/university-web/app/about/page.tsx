"use client";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Header from "../(components)/header";
import Btn from "../(components)/button";

export default function About() {
  return (
    <>
      <Box>
        <Header title="ABOUT US" />
      </Box>
      <Flex mt="250px" justify="center" gap="10em">
        <Box>
          <Heading color="#24f8c7">
            WE ARE THE WORLD'S <br /> LARGEST UNIVERSITY
          </Heading>
          <Text mt="20px" fontSize="14px" color="gray.500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            <br />
            cumque in accusantium molestias maiores fuga vitae eos, ducimus
            <br />
            officiis repudiandae voluptatem error. Laboriosam, numquam <br />
            blanditiis aspernatur, nobis tempora consequatur id aliquam <br />
            asperiores voluptatum iste animi voluptatem fugiat totam excepturi
            <br />
            dolor.
          </Text>
          <Btn color="#5236f4" border="1px solid #5236f4" text="Explore now" />
        </Box>
        <Box>
          <Image src="/img/about.png" h="300px" w="400px" />
        </Box>
      </Flex>
    </>
  );
}
