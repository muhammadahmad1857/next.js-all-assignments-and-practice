import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function User(props: any) {
  return (
    <Flex
      borderRadius="10px"
      w="500px"
      mb="5%"
      textAlign="left"
      bg="#fff3f3"
      p="25px"
      cursor="pointer"
    >
      <Image
        h="60px"
        w="60px"
        ml="5px"
        mr="30px"
        borderRadius="50%"
        src="/img/user.png"
      />
      <Box>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores
          in nostrum rerum voluptatem praesentium veritatis alias omnis
          voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In
          quia repellat maxime.
        </Text>
        <Heading fontFamily="16px" mt="15px" textAlign="left">
          Student Name
        </Heading>
        <i style={{ color: "#24f8c7" }} className="fa fa-star"></i>
        <i style={{ color: "#24f8c7" }} className="fa fa-star"></i>
        <i style={{ color: "#24f8c7" }} className="fa fa-star"></i>
        <i style={{ color: "#24f8c7" }} className="fa fa-star"></i>
        <i style={{ color: "#24f8c7" }} className={props.icon}></i>
      </Box>
    </Flex>
  );
}
