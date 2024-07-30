"use client";
import { Button, Input } from "@chakra-ui/react";

import {  useEffect, useState } from "react";
const axios = require("axios");
export default function Home() {
  const [allTodo, setAllTodo] = useState([]);
  const [gotTodo, setgotTodo] = useState([]);
  const [userInput, setUserInput] = useState("");
    // useEffect(()=>{
    //   onClickHandler()
    // },[])
  const onClickHandler=()=>{
      const axiosGet=axios.get('http://localhost:8005/get')
       setgotTodo(axiosGet.data)
       console.log(axiosGet.data);
       
      
    }
  const addHandler = () => {
    const obj = {
      task: userInput,
      date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
    };
    setAllTodo([obj,...allTodo]);
    console.log(allTodo);
    
    console.log(obj);
    
    try {
      const axiosRes = axios.post("http://localhost:8005/", {
        allTask:allTodo ,
      });
      
    } catch (e) {
      console.log(`posting error ${e}`);
    }
  };
  return (
    <>
      <h1>Todo App</h1>
      <Input
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button onClick={() => addHandler()}> Add Task</Button>
      <Button onClick={() => onClickHandler()}> get Task</Button>
     {/* <ul>
         {gotTodo.map((item,index)=>{
          return(
            <li>{item.task} &nbsp; {item.date}</li>
            
            
            )
        })}
      </ul> */}
    </>
  );
}
function handler() {
  throw new Error("Function not implemented.");
}

