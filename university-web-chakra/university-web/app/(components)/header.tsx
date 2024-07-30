"use client";
import { Box, Heading } from "@chakra-ui/react";
import Navbar from "./navbar";

export default function Header(props: any) {
  return (
    <Box
      bgImg="url(/img/banner.png)"
      bgSize="cover"
      bgPosition="center"
      h="300px"
    >
      <Navbar />
      <Heading mt="100px" textAlign="center" color="#24f8c7" as="h2">
        {props.title}
      </Heading>
    </Box>
  );
}
