"use client";
import { border, Button } from "@chakra-ui/react";

export default function Btn(props: any) {
  return (
    <Button
      _hover={{
        border: "1px solid #24f8c7",
        background: "#24f8c7",
        transition: "1s",
      }}
      position="relative"
      display="inline-block"
      color={props.color}
      border={props.border}
      borderRadius="5px"
      p="12px 39px"
      fontSize="xs"
      bg="transparent"
      cursor="pointer"
      text-decoration="none"
      mt="20px"
      mb={props.mb}
    >
      {props.text}
    </Button>
  );
}
