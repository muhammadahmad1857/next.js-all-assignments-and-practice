"use client";

import {
  Button,
  Input,
  Flex,
  Box,
  TableContainer,
  Table,
  TableCaption,
  Th,
  Tr,
  Td,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import UseLogin from "./(custom-hook)/useLogin";
import { useRouter } from "next/navigation";

export default function Home() {
  const { userObj } = UseLogin();
  const router = useRouter();

  useEffect(() => {
    gettingHandler();
  }, []);
  type TodoType = {
    task: string;
    date: string;
  };

  const token = localStorage.getItem("token");

  const [userInput, setUserInput] = useState<string>("");
  const [allTask, setAllTask] = useState<TodoType[]>([]);
  const obj: TodoType = {
    task: userInput,
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  };
  if (!token) {
    router.push("/login");

    // return alert(
    //   "You are not authenticated. Please log in to access this page."
    // );
  }
  // console.log(userObj);
  const addingHandler = async () => {
    try {
      setAllTask([obj, ...allTask]);
      const axiosPost = await axios.post("http://localhost:8015/", {
        task: userInput,
        date:
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString(),
        userId: userObj,
      });
      console.log("userObj", userObj);
      console.log("userObj");
    } catch (e) {
      console.log("adding handler", e);
    }
  };
  const gettingHandler = async () => {
    try {
      const gettingData = await axios.get("http://localhost:8015/getData");
      console.log("gettingData", gettingData.data);
      setAllTask(gettingData.data);
    } catch (e) {
      console.log("use effect function", e);
    }
  };
  const loggingOutHandler = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <>
      <Button onClick={() => loggingOutHandler()}>Log Out</Button>
      <Flex mt="30px">
        <Input
          type="text"
          placeholder="enter task"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button onClick={() => addingHandler()}>Add Task</Button>
      </Flex>

      <Box>
        <TableContainer h="500px">
          <Table overflow={"auto"} variant={"striped"} colorScheme={"blue"}>
            <TableCaption>Here You See Your Entered Task</TableCaption>
            <Tr>
              <Th>#</Th>
              <Th>Task</Th>
              <Th>Date</Th>
              <Th>Actions</Th>
            </Tr>

            {allTask.map((item, index) => {
              return (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{item.task}</Td>
                  <Td>{item.date}</Td>
                  <Td>
                    <Flex gap={"10px"}>
                      <Button w={"50px"}>Del</Button>
                      <Button w={"50px"}>Edit</Button>
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
