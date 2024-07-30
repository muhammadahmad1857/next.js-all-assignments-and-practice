"use client";

import { Box, Button, Heading, Input, useToast } from "@chakra-ui/react";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/db-config";
import { useRouter } from "next/navigation";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const toast = useToast();
  const signingUpHandler = async () => {
    try {
      const createUser = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Sign Up", createUser);
      router.push("/login");
      toast({
        title: "You Are Signed up",
        description: "For using this app you want to sign in now",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (e) {
      console.log("signing up error", e);
      toast({
        title: e.message,
        description:
          "While signing up an error occured ",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Heading textAlign={"center"}>Sign Up</Heading>
      <Box>
        <Input
          w="500px"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          w="500px"
          mt={"50px"}
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={() => signingUpHandler()} w="500px" mt={"50px"}>
          SignUp
        </Button>
      </Box>
    </>
  );
}
