"use client";
import { Box, Button, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import UseLogin from "../(custom-hook)/useLogin";

export default function login() {
  const {
    logginginHandler,
    setEmail,
    setPassword
  }=UseLogin() 
   return (
    <Box>
      <Input
        type="email"
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => logginginHandler()}>Login</Button>
    </Box>
  );
}
