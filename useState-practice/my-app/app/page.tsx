"use client";
import { useState } from "react";
import Button from "../app/(componenets)/button";

export default function Page() {
  const [addNumber, setAddNumber] = useState<number>(0);
  const [addNumber2, setAddNumber2] = useState<number>(0);
  function addNum2() {
    setAddNumber2(addNumber2 + 1);
  }

  function minusNum2() {
    setAddNumber2(addNumber2 - 1);
  }
  function resetNum2() {
    setAddNumber2(0);
  }
  function addNum() {
    setAddNumber(addNumber + 1);
  }

  function minusNum() {
    if (addNumber > 0) {
      setAddNumber(addNumber - 1);
    }
  }
  function resetNum() {
    setAddNumber(0);
  }
  return (
    <span>
      <h1>
        Reset Button only show when value is not equal to zero and minus button
        is only work in the situation when value is greater than 0
      </h1>
      your number={addNumber}
      
      <Button function={() => addNum()} title="+" />
      
      <Button function={() => minusNum()} title="--" />
      
      {addNumber !== 0 && (
        <Button function={() => resetNum()} title="click to reset number" />
      )}
      <h1>Reset Button always show</h1>
      your number={addNumber2}
      
      <Button function={() => addNum2()} title="+" />
      
      <Button function={() => minusNum2()} title="-" />
      
      <Button function={() => resetNum2()} title="click to reset number" />
    </span>
  );
}
