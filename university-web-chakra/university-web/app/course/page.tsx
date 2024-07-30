"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Header from "../(components)/header";
import TextCard from "../(components)/textCard";
import Imagecard from "../(components)/imagecard";
// import Imagecard from "../(components)/imagecard";
// import { Image } from "@chakra-ui/next-js";
// import { Card, CardBody } from "@chakra-ui/react";
export default function Course() {
  return (
    <>
      <Box>
        <Header title="OUR COURSES" />
      </Box>
      <Box textAlign="center" mt="60px">
        <Heading color="#24f8c7">COURSE WE OFFER</Heading>
        <Text color="GrayText" fontSize="xs" mt="10px">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Text>
      </Box>
      <Flex justify="center" gap="20px" mr="60px" ml="60px" mt="50px">
        <TextCard heading="Undergraduate Programs" />
        <TextCard
          heading="Graduate Programs
"
        />
        <TextCard
          heading="Adult Learning & Degree Completion
"
        />
      </Flex>
      <Box textAlign="center" mt="60px">
        <Heading color="#24f8c7">Best Courses</Heading>
        <Text color="GrayText" fontSize="xs" mt="10px">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Text>
      </Box>
      <Flex justify="center" gap="1px" ml="100px" mr="100px">
        <Imagecard
          title="Web Development
"
          img="/img/course1.png"
        />
        <Imagecard
          title="Artificial Intelligence
"
          img="/img/course2.png"
        />
        <Imagecard
          title="Data Science
"
          img="/img/course3.png"
        />
      </Flex>
    </>
  );
}
