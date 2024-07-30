"use client";
import { Heading, Box, Text, Flex } from "@chakra-ui/react";
import Navbar from "./(components)/navbar";
import Btn from "./(components)/button";
import Verticaline from "./(components)/verticaline";
import TextCard from "./(components)/textCard";
import Image1 from "./(components)/image";
import Athletic from "./(components)/athletic";
import User from "./(components)/user";
// import Link from "next/link";

export default function page() {
  return (
    <>
      <Box
        bgImage="url('/img/banner1.png')"
        bgSize="cover"
        h="600px"
        textAlign="center"
      >
        <Box bgGradient="linear(#517e86c4, #949fdf1a)">
          <Navbar />
          <Box mt="80px">
            <Heading color="#24f8c7" fontSize="90px">
              GET READY
            </Heading>
            <Heading color="#c8fff2">TO DISCOVER CAMPUS</Heading>
            <Text color="white" mt="10px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              consequuntur corrupti sapiente aut porro <br />
              esse blanditiis in quae perspiciatis quo.
            </Text>
            <Btn text="Visit Us To Know" color="#fff" border="1px solid #fff" />
          </Box>
        </Box>
      </Box>
      <Verticaline />
      <Box textAlign="center">
        <Heading color="#24f8c7" fontSize="50px">
          EXPLORE OUR 60+ <br />
          MAJOR PROGRAMS
        </Heading>
        <Text color="gray.500" mt="10px">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Text>
      </Box>
      <Flex justify="center" gap="20px" mr="60px" ml="60px" mt="50px">
        <TextCard heading="Undergraduate Programs" />
        <TextCard heading="Graduate Programs" />
        <TextCard heading="Adult Learning & Degree Completion" />
      </Flex>
      <Verticaline />
      <Box textAlign="center">
        <Heading color="#24f8c7" fontSize="50px">
          Take Our Virtual Tour
        </Heading>
        <Text color="gray.500" mt="10px">
          Lorem ipsum dolor, sit amet consectetur adipisnpmicing elit.
        </Text>
      </Box>
      <Flex gap="40px" pl="30px" pr="30px" mt="30px">
        <Image1 img="/img/campus1.png" heading="Delhi" />
        <Image1 img="/img/campus2.png" heading="Heydarabad" />
        <Image1 img="/img/campus3.png" heading="mumbai" />
      </Flex>
      <Verticaline />
      <Box textAlign="center">
        <Heading color="#24f8c7" fontSize="50px">
          OUR FACILITIES
        </Heading>
        <Text color="gray.500" mt="10px">
          Lorem ipsum dolor, sit amet consectetur adipisnpmicing elit.
        </Text>
      </Box>
      <Flex justify="center" gap="50px" pl="30px" pr="30px">
        <Athletic img="/img/libary.png" text="Best Library" />
        <Athletic img="/img/playground.png" text="Athletics" />
        <Athletic
          img="/img/food.png"
          text="Tasty and Healthy Food
"
        />
      </Flex>
      <Verticaline />
      <Box textAlign="center">
        <Heading color="#24f8c7" fontSize="50px">
          WHAT OUR STUDENT SAYS
        </Heading>
        <Text color="gray.500" mt="10px">
          Lorem ipsum dolor, sit amet consectetur adipisnpmicing elit.
        </Text>
      </Box>
      <Flex gap="60px" mt="20px" justify="center">
        <User icon="fa fa-star" />
        <User icon="fa fa-star-half-alt" />
      </Flex>
      <Box
        bgImg="/img/back1.png"
        mt="50px"
        textAlign="center"
        h="350px"
        bgSize="cover"
        pt="100px"
        bgRepeat="no-repeat"
        ml="100px"
        mr="100px"
        borderRadius="3xl"
      >

            <Heading color="#fff" fontSize="5xl">
              GET READY FOR A BRIGHT FUTURE
            </Heading>
            <Btn text="Contact Us" color="#fff" border="1px solid #fff" />
        </Box>
    </>
  );
}
