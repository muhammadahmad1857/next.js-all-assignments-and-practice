"use client";
import {
  Box,
  FormControl,
  Heading,
  Input,
  Button,
  Flex,
  TableContainer,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  TableCaption,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, SearchIcon } from "@chakra-ui/icons";
import useTodoLogical from "../(custom-hooks)/todo";

export default function Todo() {
  const {
    tasks,
    isTrue,
    fullTask,
    isUpdate,
    newItem,
    search,
    searchResult,
    task1,
    taskFunction,
    Delete,
    updateHandler,
    editHandler,
    cancelhandler,
    searchhandler,
    handleSearchInputChange,
    setTask,
    getDataFromDb,
  } = useTodoLogical();

  return (
    <>
      <button onClick={() => getDataFromDb()}>Get Todo from Firebase</button>
      {isTrue && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>An Error Occured!</AlertTitle>
          <AlertDescription>Due to you don't enter any task</AlertDescription>
        </Alert>
      )}
      <Flex
        mt="50px"
        border="1px #f0f0f0 solid"
        ml="350px"
        w="550px"
        alignItems={"center"}
        borderRadius={"10px"}
      >
        <SearchIcon ml="30px" mr="4px" />
        <Input
          border="none"
          placeholder=" search your task"
          onChange={handleSearchInputChange}
          value={search}
          type="search"
        />
      </Flex>
      {search !== `` && (
        <Box
          mt="30px"
          textAlign={"center"}
          bg="black"
          color="white"
          ml="350px"
          mr="450px"
        >
          <ul>
            {searchResult.map((item: any, index: number) => (
              <li key={index}>{item.task}</li>
            ))}
          </ul>
        </Box>
      )}
      <Box
        bg="#f0f0f0"
        w="60%"
        m="auto"
        pt="50px"
        mt="30px"
        mb="50px"
        textAlign={"center"}
      >
        <Heading mt="-20px" color={"blue"} fontWeight={"hairline"}>
          Simple To Do List App
        </Heading>
        <br />
        <hr />
        <Flex justify="center" mt="50px" gap="10px">
          <FormControl w="50%">
            <Input
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter Your Task"
              value={tasks}
            />
          </FormControl>

          {!isUpdate ? (
            <Button bg="blue" color={"white"} onClick={() => taskFunction()}>
              Add Task
            </Button>
          ) : (
            <>
              <Button bg="teal" color={"white"} onClick={() => editHandler()}>
                Update
              </Button>
              <Button
                bg="salmon"
                color={"white"}
                onClick={() => cancelhandler()}
              >
                Cancel
              </Button>
            </>
          )}
        </Flex>
        <br />
        <hr />
        <Box textAlign={"center"} overflow={"scroll"} h="170px" mt="50px">
          <TableContainer ml="30px" mr="20px">
            <Table variant="striped" bg="blue.100">
              <TableCaption>Here You See Your Entered Task</TableCaption>

              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Task</Th>
                  <Th>Date</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {fullTask.map((item: any, index: any) => {
                  return (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item.task}</Td>
                      <Td>{item.mellisecond}</Td>
                      <Td display="flex" gap={3}>
                        <Button
                          onClick={() => Delete(index)}
                          fontWeight={"bolder"}
                          bg="red"
                          w="30px"
                          h="40px"
                          color="white"
                        >
                          <DeleteIcon />
                        </Button>

                        <Button
                          onClick={() => updateHandler(item.task, index)}
                          fontWeight={"bolder"}
                          bg="teal"
                          w="30px"
                          h="40px"
                          color="white"
                        >
                          <EditIcon />
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

// const month = new Date().getMonth() + 1;
//   const year = new Date().getFullYear();
//   const date = new Date().getDate();
//   const hours = new Date().getHours()
//   const minutes = new Date().getMinutes();
//   const second = new Date().getSeconds();
//   const fullDate =
//     year +
//     "/" +
//     month +
//     "/" +
//     date +
//     " " +
//     hours +
//     ":" +
//     minutes +
//     ":" +
//     second;
