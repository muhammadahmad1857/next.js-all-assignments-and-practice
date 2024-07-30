"use client";

import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
// const axios = require("axios");

export default function () {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number | undefined | string>();
  //   const onClickHandler = async () => {
  //     try {
  //       const axiosRes = await axios.get("http://localhost:8002/");

  //       console.log("axios Response", axiosRes.data);
  //     } catch (e) {
  //       console.log(`Axios Getting Error ${e}`);
  //     }
  //   };
  const onClickHandlerForPost = async () => {
    // try {
    //   const axiosPost = await axios.post("http://localhost:8002/", {
    //     firstName: "Ahmadwwwww",
    //     lastName: "hi",
    //     array: [1, 3, 4, 2, 2, 4, 3, 2],
    //   });
    //   console.log(`axios Post ${axiosPost.data}`);
    // } catch (e) {
    //   console.log(`Axios Getting Error ${e}`);
    // }
    // try {
    //   const axiosPost1 = await axios.post("http://localhost:8002/", {
    //     firstName: firstName,
    //     lastName: lastName,
    //     age: age,
    //   });
    // } catch (e) {
    //   console.log("Posting Error", e);
    // }

    // // fetch method
    try {
        const response = await fetch("http://localhost:8002/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            age: age,
          }),
        });
      
        
      } catch (e) {
        console.error("Network Error", e);
      }
      
    
    // try {
    //     const response = await fetch("http://localhost:8002", {
    //       method: "POST",
    //       body: JSON.stringify({
    //         firstName: firstName,
    //         lastName: lastName,
    //         age: age,
    //       }),
    //     });
      
      
    //     const data = await response.json();
    //     console.log("data", data);
    //   } catch (e) {
    //     console.error("Posting Error:", e);
    //   }
      
  };
  return (
    <>
      <h1>Hello World</h1>
      <Input
        type="text"
        placeholder="Enter Your FirstName"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter Your LastName"
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Enter Your Age"
        onChange={(e) => setAge(e.target.value)}
      />
      {/* <Button onClick={() => onClickHandler()}>Click Me</Button> */}
      <Button onClick={() => onClickHandlerForPost()}>
        Click Me For Posting Data
      </Button>
    </>
  );
}
