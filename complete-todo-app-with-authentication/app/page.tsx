"use client";
import {
  Input,
  Button,
  Flex,
  Table,
  Th,
  Td,
  Tr,
  TableContainer,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import UseLogical from "./LogicalCode/useLogical";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  const {
    AddTask,
    allTask,
    isUpdate,
    setUserInput,
    editHandler,
    cancelHandler,
    updatehandler,
    delhandler,
    userInput,
  } = UseLogical();
  return (
    <>
      <Flex mt={"10px"} justifyContent={"right"} gap={"10px"}>
        <Link
          href={"/login"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button justifyContent={"right"} bgColor={"blue"} color={"white"}>
            Log In
          </Button>
        </Link>
        <Link
          href={"/signup"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button bgColor={"orange"} color={"white"}>
            SignUp
          </Button>
        </Link>
      </Flex>
      <Flex mt="20px" w="70%" gap="40px" ml="100px">
        <Input
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter Your Task..."
          value={userInput}
        />
        {!isUpdate ? (
          <Button onClick={() => AddTask()}>Add Task</Button>
        ) : (
          <>
            <Button onClick={() => updatehandler()}>Update</Button>

            <Button onClick={() => cancelHandler()}>Cancel</Button>
          </>
        )}
      </Flex>
      <TableContainer w="70%" ml="100px">
        <Table variant={"striped"} overflow={"scroll"}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Task</Th>
              <Th>Date</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody bg={"black"}>
            {allTask.map((item: any, index: any) => (
              <Tr key={index}>
                <Td color={"teal"}>{index + 1}</Td>
                <Td color={"saddlebrown"}>{item.task}</Td>
                <Td color={"grey"}>{item.date}</Td>
                <Td>
                  <Button
                    bg={`transparent`}
                    color={`grey`}
                    onClick={() => delhandler(item.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    bg={`transparent`}
                    color={`teal`}
                    onClick={() => editHandler(item.task, item.id)}
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
