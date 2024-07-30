"use client";

import { useEffect, useState } from "react";
const axios = require(`axios`);
export default function Home() {
  // useEffect(()=>{
  //   gettingHandler()
  // },[])
  const [userInput, setUserInput] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [allTask, setAllTask] = useState([]);
  const obj = {
    task: userInput,
    date: new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString(),
  };
  const addingHandler = async () => {
    setAllTask([obj, ...allTask]);

   const axiosPost=await axios.post('http://localhost:8010',{
      task:userInput
    })
    console.log('axiosPost',axiosPost);
    
    
  };
  const loggingInHandler = async () => {

   const axiosPostUser=await axios.post('http://localhost:8010/user',{
      email:userEmail,
      password:userPassword
    })
    console.log('axiosPost',axiosPostUser);
    
    
  };
const gettingHandler= async ()=>{
  console.log('okoko');
  
  try{
  const axiosGet=await axios.get('http://localhost:8010/read')
  console.log(`axiosGet ${axiosGet.data}`);

  setAllTask(axiosGet.data)
  console.log(`allTask ${allTask}`);}
  catch(e){
    console.log(`getting error ${e }`);
    
  }
  
}

  return (
    <>
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
            <button onClick={() => addingHandler()}>add task</button>

      <br/>
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => {
          setUserEmail(e.target.value);
        }}
      />
      <br/>
            <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
      />
      <br/>
      <button onClick={() => loggingInHandler()}>login</button>
      
    </>
  );
}
