"use client";
import { Box, Button, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function signUp() {
  // useEffect(() => {
  //   gettingId();
  // }, []);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [id, setid] = useState();
  const router = useRouter();

  const signingupHandler = async () => {
    try {
      const signup = axios.post("http://localhost:8015/signUp", {
        email: email,
        password: password,
      });
      console.log("siGnUp", signup);
      router.push("/login");
    } catch (e) {
      console.log("signing Up error", e);
    }
  };
  // const gettingId = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8015/gettingId");
  //     const id1 = response.data;
  //     console.log("id", id1);
  //     setid(id1);
  //     console.log(id);
  //   } catch (e) {
  //     console.log("getting id error", e);
  //   }
  // };
  // console.log('id',idd);

  return (
    <Box>
      <Input
        type="email"
        placeholder="Enter Your Email"
        mt="20px"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Enter Your Password"
        mt="50px"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => signingupHandler()}>SignUp</Button>
    </Box>
  );
}
