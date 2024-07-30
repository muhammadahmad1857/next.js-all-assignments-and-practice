import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";

export default function Athletic(props: any) {
  return (
    <Box>
      <Card w="400px">
        <CardBody>
          <Image
            _hover={{ boxShadow: " 0 0 20px 0px rgba(0, 0, 0, 0.2)" }}
            src={props.img}
          />
          <Text fontSize="16px">{props.text}</Text>
          <Text color="gray.500" mt="20px">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Distinctio omnis asperiores <br /> atque aperiam.
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}
