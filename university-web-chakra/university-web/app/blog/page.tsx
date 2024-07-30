"use client";

import { Box, Button, Flex, Image, Text, Heading } from "@chakra-ui/react";
import Header from "../(components)/header";
import LoremText from "../(components)/loremText";
import Input1 from "../(components)/input";
import TextArea from "../(components)/textArea";
import Btn from "../(components)/button";

export default function Blog() {
  return (
    <>
      <Box>
        <Header title="OUR POST" />
      </Box>
      <Flex mt="50px" justify="space-between" ml="100px" mr="100px">
        <Box maxW="700px">
          <Text>Our Certificate & Online Program</Text>
          <Text color="#24f8c7">Sep 4,2023</Text>
          <Image src="/img/post.png" w="700px" />
          <LoremText />
          <LoremText />
          <LoremText />
          <LoremText />
          <Box
            as="fieldset"
            border="2px #ccc solid"
            mt="50px"
            pl="30px"
            pr="30px"
            pt="5px"
            pb="5px"
          >
            x
            <Heading as="h3" fontSize="16px">
              Leave a Comment
            </Heading>
            <Input1
              type="text"
              placeholder="Enter Name"
              bg="#f0f0f0"
              width="100%"
            />
            <br />
            <Input1
              type="email"
              placeholder="Enter Email"
              bg="#f0f0f0"
              width="100%"
            />
            <br />
            <TextArea
              bg="#f0f0f0"
              width="100%"
              placeholder="Enter Message"
              row="5"
            />
            <Btn
              color="#5236f4"
              border="1px solid #5236f4"
              text="Post Comment"
              mb="10px"
            />
          </Box>
        </Box>
        <Box>
          <Button bg="#24f8c7" color="white" w="350px">
            Post Category
          </Button>
          <Flex
            gap="11.5em"
            color="gray.500"
            _hover={{ color: "#24f8c7" }}
            mt="10px"
          >
            <Text>Business Analytics</Text> <Text>12</Text>
          </Flex>
          <Flex
            mt="10px "
            gap="12em"
            color="gray.500"
            _hover={{ color: "#24f8c7" }}
          >
            <Text>Machine Learning</Text> <Text>29</Text>
          </Flex>
          <Flex
            mt="10px"
            gap="11.5em"
            color="gray.500"
            _hover={{ color: "#24f8c7" }}
          >
            <Text>Computer Science</Text> <Text>15</Text>
          </Flex>
          <Flex
            mt="10px"
            gap="13.6em"
            color="gray.500"
            _hover={{ color: "#24f8c7" }}
          >
            <Text>Data Analytics</Text> <Text>22</Text>
          </Flex>
          <Flex
            mt="10px"
            gap="15.7em"
            color="gray.500"
            _hover={{ color: "#24f8c7" }}
          >
            <Text>Full Stack</Text> <Text>20</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
