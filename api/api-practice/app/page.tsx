"use client";
import {
  Card,
  Box,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
  Grid,
  GridItem,
  Button,
  ButtonGroup,
  Input,

} from "@chakra-ui/react";
import useECommerce from "./custom-hooks/useECommerce";

export default function cardFunction() {
  const { handleChangeInput, search, allItem, fetchCart } =
    useECommerce();


  return (
    <>
      <Box mt="30px" textAlign={"center"}>
        <Input
          onChange={handleChangeInput}
          m="auto"
          w="400px"
          type="search"
          placeholder="Searh Here..."
          value={search}
        />
        {/* {searchedResult.map((item: any) => {
          <li>{item.id}</li>;
        })} */}
      </Box>
      <Box>
        {/* {allItem.length > 0 ? ( */}
        <Grid mt="30px" templateColumns="repeat(3,1fr)" gap={6}>
          {allItem.map((item: any) => {
            return (
              <GridItem w="100%" h="700px">
                <Card border={"1px solid black"} maxW="sm" h="700px">
                  <CardBody>
                    <Image h="300px" src={item.image} borderRadius="lg" />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{item.category}</Heading>

                      <Heading size="md">{item.title.slice(0, 100)}...</Heading>
                      <Text>{item.description.slice(0, 100)}...</Text>
                      <Text color="blue.600" fontSize="2xl">
                        ${item.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant="solid" colorScheme="blue">
                        Buy now
                      </Button>
                      <Button
                        variant="outline"
                        colorScheme="yellow"
                        onClick={() => fetchCart(item.id)}

                      >
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </GridItem>
            );
          })}
        </Grid>
        {/* ) : (
          <Text> no products found</Text>
        )} */}
      </Box>
     
    </>
  );
}
