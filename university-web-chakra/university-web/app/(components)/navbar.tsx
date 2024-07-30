"use client";
import { Flex, List, ListItem, Link, transition } from "@chakra-ui/react";
export default function Navbar() {
  return (
    <Flex
      pt="30px"
      justify="space-between"
      pl="60px"
      pr="60px"
      color="white"
      textDecorationLine="none"
      fontSize="25px"
    >
      <List>
        <ListItem>
          <Link
            href="/"
            fontSize="30px"
            _hover={{
              textDecoration: "none",
            }}
          >
            Xplore
            <i style={{ color: "#24f8c7 " }} className="fab fa-staylinked"></i>
            kills
          </Link>
        </ListItem>
      </List>
      <List display="flex" gap="30px">
        <ListItem
          _hover={{
            textDecoration: "underline",
            transition: "0.5s",
          }}
        >
          <Link
            _hover={{
              textDecoration: "underline #24f8c7",
              transition: "0.5s",
            }}
            href="/"
          >
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link
            _hover={{
              textDecoration: "underline #24f8c7",
              transition: "0.5s",
            }}
            href="/course"
          >
            Course
          </Link>
        </ListItem>
        <ListItem>
          <Link
            _hover={{
              textDecoration: "underline #24f8c7",
              transition: "0.5s",
            }}
            href="/blog"
          >
            Blog
          </Link>
        </ListItem>
        <ListItem>
          <Link
            _hover={{
              textDecoration: "underline #24f8c7",
              transition: "0.5s",
            }}
            href="/about"
          >
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link
            _hover={{
              textDecoration: "underline #24f8c7",
              transition: "0.5s",
            }}
            href="/contact"
          >
            Contact
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
