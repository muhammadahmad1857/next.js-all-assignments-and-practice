"use client";

import { useState } from "react";

const InputData = () => {
  const [userName, SetUserName] = useState<any>("");

  return (
    <>
      <input
        onChange={(e) => SetUserName(e.target.value)}
        type="text"
        placeholder="write name"
      />
       <br />
    </>
  );
};

export default InputData;
