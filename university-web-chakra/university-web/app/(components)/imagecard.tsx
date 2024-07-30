"use client";
import { Card, Heading, Text, Box, Image } from "@chakra-ui/react";

export default function Imagecard(props: any) {
  return (
    <>
      <Box
        boxSizing="border-box"
        borderRadius=" 10px"
        transition="0.5s"
        p="10px"
        mr="20px"
        ml="20px"
        // h="300px"
      >
        <Card>
          <Image
            _hover={{ boxShadow: " 0 0 20px 0px rgba(0, 0, 0, 0.2)" }}
            src={props.img}
            alt=""
            h="200"
            w="100%"
          />
          <Heading fontSize="25px" fontWeight="bolder" m="5px">
            {props.title}
          </Heading>
          <Text fontSize="sm"  pt="10px" pb="50px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            omnis asperiores atque aperiam.
          </Text>
        </Card>
      </Box>
      {/* <Card
        bg="#fff3f3"
        boxSizing="border-box"
        borderRadius=" 10px"
        transition="0.5s"
        p="10px"
        mr="20px"
        ml="20px"
        _hover={{ boxShadow: " 0 0 20px 0px rgba(0, 0, 0, 0.2)" }}
        h="300px"
      >
        <Image src="/img/course2.png" alt="" height="240" width="240" />
        <Heading fontSize="25px" fontWeight="bolder" m="5px">
          hello
        </Heading>
        <Text fontSize="sm" pb="20px" pt="10px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          omnis asperiores atque aperiam.
        </Text>
      </Card> */}
    </>
  );
}
