import { Flex, Heading, Box, Text } from "@chakra-ui/react";

export default function Details(props: any) {
  return (
    <Flex gap="25" mt="20px">
      <i
        style={{ color: "#24f8c7", fontSize: "20px" }}
        className={props.icon}
      ></i>
      <Box>
        <Heading fontSize="lg" color="gray.500">
          {props.heading}
        </Heading>
        <Text color="gray.500">{props.text}</Text>
      </Box>
    </Flex>
  );
}
