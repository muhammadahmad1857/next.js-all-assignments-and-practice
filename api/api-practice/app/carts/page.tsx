"use client";
import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import useECommerce from "../custom-hooks/useECommerce";

const CartFunction = () => {
  const { gettingItems, incrementFunction, decrementFunction, quantity } =
    useECommerce();
  return (
    <>
      <Box>
        {gettingItems.map((item: any) => {
          return (
            <>
              <fieldset>
                <Flex>
                  <Box border={"1px solid black"}>
                    <Image src={item.image} />
                  </Box>
                  <Box>
                    <Text></Text>
                  </Box>
                </Flex>
                <Box>
                  <Button
                    color="white"
                    bg="teal"
                    onClick={() => incrementFunction()}
                  >
                    +
                  </Button>
                  {quantity}
                  <Button
                    color="white"
                    bg="red"
                    onClick={() => decrementFunction()}
                  >
                    -
                  </Button>
                </Box>
                <Box>
                  <Text color="orange">{item.price}</Text>
                  <Text color="gray">{item.date}</Text>
                  <Button color="teal">Buy Now</Button>
                </Box>
              </fieldset>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default CartFunction;
