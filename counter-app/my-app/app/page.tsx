"use client";
import { Button, Center, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
export default function Home() {
  const [num, setNum] = useState<number>(0);
  // const add = () => {
  //   setNum(num + 1);
  // };
  // const minus = () => {
  //   setNum(num - 1);
  // };
  // const reset = () => {
  //   setNum(0);
  // };
  return (
    <Center display={"flex"} flexDirection={"column"}>
      <Heading>Counter App In Next.js</Heading>
      <Text>Counter Value:{num}</Text>
      <Button mt={"20px"} onClick={() => setNum(num + 1)}>
        Increment
      </Button>

      {num > 0 &&
        <>
          <Button mt={"20px"} onClick={() => setNum(num - 1)}>
            Decrement
          </Button>
          <Button mt={"20px"} onClick={() => setNum(0)}>
            Reset To Zero
          </Button>
        </>
      }
      {/* <Button onClick={() => add()}>Increment</Button>
      <Button onClick={() => minus()}>Decrement</Button>
      <Button onClick={() => reset()}>Reset To Zero</Button> */}
    </Center>
  );
}
