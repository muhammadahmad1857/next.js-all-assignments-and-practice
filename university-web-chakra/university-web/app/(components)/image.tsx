import { Image, Box, Heading, position, Flex } from "@chakra-ui/react";

export default function Image1(props: any) {
  return (
    // <Box>
    //   <Image src={props.img} h="250px" w="400px" borderRadius="lg" />
    //   <Heading
    //     opacity="0"
    //     transition="0.5s"
    //     _hover={{ bottom: "100%", opacity: "1", pb: "99px" }}
    //   >
    //     {props.heading}
    //   </Heading>
    // </Box>
    <Box position="relative" borderRadius="10px" mb="30px">
      <Image w="100%" display="block" src={props.img} alt="" />
      <Box
        bg="transparent"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        transition=" 0.5s"
        _hover={{
          background: " #24f8c741",
        }}
      >
        <Heading
          textAlign="center"
          position="absolute"
          w="100%"
          fontWeight="500"
          color="#fff"
          fontSize="26px"
          bottom="0"
          opacity="0"
          transition="0.5s"
          _hover={{
            bottom: "49%",
            opacity: "1",
          }}
        >
          {props.heading}
        </Heading>
      </Box>
    </Box>
    //   <Box>
    //     <Image src="img/Campus2.png" alt="" />
    //     <Box>
    //       <h3>HYDERABAD</h3>
    //     </Box>
    //   </Box>
    //   <Box>
    //     <Image src="img/Campus3.png" alt="" />
    //     <Box>
    //       <h3>MUMBAI</h3>
    //     </Box>
    //   </Box>
    // </Flex>
  );
}
