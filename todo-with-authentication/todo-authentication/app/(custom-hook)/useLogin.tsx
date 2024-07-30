"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function UseLogin() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [userObj, setUserObj] = useState<string>();
  let userObj;
  const logginginHandler = async () => {
    try {
      // useEffect(()=>{
      //   gettingId()
      // },[])
      const login = await axios.post("http://localhost:8015/login", {
        email: email,
        password: password,
      });
      userObj = login.data.data;
      const jwtToken = login.data.token;
      // setUserObj(login.data.data);
      console.log("login", login.data.data);
      console.log("loginToken", login.data.token);

      console.log("userObj", userObj);

      localStorage.setItem("token", jwtToken);

      router.push("/");
    } catch (e) {
      console.log("logging in error", e);
    }
  };
  return {
    userObj,
    logginginHandler,
    setEmail,
    setPassword,
  };
}
