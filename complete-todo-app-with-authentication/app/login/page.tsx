"use client";

import { Box, Button, Heading, Input, useToast } from "@chakra-ui/react";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/db-config";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [isNotLoggedIn, SetIsNotLoggedIn] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const loggingInHandler = async () => {
    try {
      const signInUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Log In", signInUser);
      router.push("/");
      toast({
        title: "You Are Signed In",
        description: "Now You Use this app Hooray!",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    } catch (e) {
      toast({
        title: e.message,
        description:
          "For Signing in first you need to sign up For signing up You click this link  ",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
    finally{
        SetIsNotLoggedIn(false)
    }
  };
  return (
    <>
      <Heading textAlign={"center"}>Login Form</Heading>
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
        <Button onClick={() => loggingInHandler()} w="500px" mt={"50px"}>
          Login
        </Button>
      </Box>
      {/* {isLoggedIn &&
       }
      {isNotLoggedIn &&
       } */}
    </>
  );
}
