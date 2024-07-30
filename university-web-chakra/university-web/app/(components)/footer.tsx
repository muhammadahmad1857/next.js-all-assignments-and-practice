"use client";
import { Style } from "../page.module.css";
import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react";
// import Link from "next/link";
// import styles from "./footer.module.css";
export default function Footer() {
  return (
    <Box mt="100px">
      <hr />
      <Box textAlign="center">
        <Heading as="h6" fontSize="lg" mt="30px">
          About Us
        </Heading>
        <Text mt="30px" fontSize="sm" color="gray.400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
          minimaincidunt odio nam facilis, eligendi <br />
          Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
          exercitationem, illum molestiae dolorem.
        </Text>
        <Flex
          mt="30px"
          justify="center"
          color="blue"
          fontSize="0.95em"
          gap="30px"
        >
          <i
            style={{ color: "blue" }}
            className="fab fa-facebook-f"
          ></i>
          <i
            style={{ color: "blue" }}
            className="fab fa-instagram"
          ></i>
          <i style={{ color: "blue" }}  className="fab fa-twitter"></i>
          <i
            style={{ color: "blue" }}
            className="fab fa-linkedin"
          ></i>
        </Flex>
        <Text
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="30px"
          color="gray.400"
          fontSize="sm"
        >
          Made with
          <i style={{ color: "#24f8c7 " }} className="fas fa-heart"></i>
          <Text
            fontWeight="bold"
            color="blue"
            _hover={{
              color: "#24f8c7",
            }}
          >
            Ahmad Developer
          </Text>
        </Text>
        <Text mt="30px" color="gray.400" fontSize="sm">
          Copyright © 2023 &nbsp;
          <Link
            href="/"
            color="blue"
            fontWeight="bolder"
            _hover={{
              color: "#24f8c7",
            }}
          >
            Xplore Skill
          </Link>
          . All Rights Reserved
        </Text>
      </Box>
    </Box>
  );
}
