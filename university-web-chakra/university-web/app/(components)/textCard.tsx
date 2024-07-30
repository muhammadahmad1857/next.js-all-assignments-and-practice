import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

export default function TextCard(props: any) {
  return (
    <Card
      bg="#fff3f3"
      boxSizing="border-box"
      borderRadius=" 10px"
      transition="0.5s"
      p="10px"
      mr="20px"
      ml="20px"
      _hover={{ boxShadow: " 0 0 20px 0px rgba(0, 0, 0, 0.2)" }}
      h="220px"
      textAlign="center"
    >
      <Heading fontSize="25px" textAlign="center" fontWeight="bolder" m="5px">
        {props.heading}
      </Heading>

      <Text fontSize="sm" pb="20px" pt="10px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor
        corporis, commodi nihil quas soluta labore quisquam impedit distinctio
        explicabo aut minima quos pariatur unde aliquam earum laborum velit non.
      </Text>
    </Card>
  );
}
