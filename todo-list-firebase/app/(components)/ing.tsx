import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Img() {
  const [img, setImg] = useState();
  function add() {
    console.log(img);
  }
  return<> <Input type="file" onChange={(e)=>setImg(e.target.files)}/>
  <Button onClick={()=>add()}>Click here</Button>
  </>;
}
