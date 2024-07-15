"use client";
import Styles from "../page.module.css";
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  Table,
  FormLabel,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  TableContainer,
  TableCaption,
  calc,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useState } from "react";
import StudentType from "../(types)/studentType";

export default function RegistrationForm() {
  const [names, setName] = useState<string>("");
  const [rollno, setRollno] = useState<number | undefined>();
  const [section, setSection] = useState<string>("");
  const [studentInformation, setStudentInformation] = useState<StudentType[]>(
    []
  );

  const studentInfo: StudentType = {
    name: names,
    RollNo: rollno,
    section: section,
  };
  function student() {
    setStudentInformation([studentInfo, ...studentInformation]);
    setName("");
    setRollno(undefined);
    setSection("");
  }
  function Delete(RollNo: number | undefined, section: string) {
    const newStudents = studentInformation.filter(
      (item) => item.RollNo !== RollNo || item.section !== section
    );
    setStudentInformation(newStudents);
  }
  return (
    <>
      <Box
        textAlign={"center"}
        ml="auto"
        mr="auto"
        mt="30px"
        pt="30px"
        pb="30px"
        pl="50px"
        pr="50px"
        w="fit-content"
        bg="teal"
      >
        <Heading>Student Form</Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>

          <Input
            onChange={(e) => setName(e.target.value)}
            h="30px"
            bg="teal"
            color="white"
            className={Styles.input}
            w="500px"
            placeholder="Enter Student Name"
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Roll Number</FormLabel>
          {/* 
          <Input
            onChange={(e) => setRollno(e.target.value)}
            h="30px"
            bg="teal"
            color="white"
            className={Styles.input}
            w="500px"
            placeholder="Enter Student RollNO."
          /> */}

          <NumberInput min={1} max={50}>
            <NumberInputField
              h="30px"
              bg="teal"
              color="white"
              className={Styles.input}
              w="500px"
              placeholder="Enter Student RollNO."
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <br />

        <FormControl>
          <FormLabel>Section</FormLabel>

          <Input
            onChange={(e) => setSection(e.target.value)}
            h="30px"
            bg="teal"
            color="white"
            className={Styles.input}
            w="500px"
            placeholder="Enter Student Section"
          />
        </FormControl>
        <br />
        <Button
          onClick={() => student()}
          w="60%"
          mt={6}
          bg="black "
          border={"none"}
          h="30px"
          color="white"
        >
          Submit
        </Button>
      </Box>
      <TableContainer
        mt={"5"}
        mx={"auto"}
        w={"50%"}
        overflowX={"auto"}
        overflowY={"auto"}
        height="125px"
      >
        <Table
          variant="striped"
          colorScheme="teal"
          textAlign={"center"}
          border={2}
        >
          <TableCaption>Student Info Table</TableCaption>
          <Thead>
            <Tr>
              <Th>Student Name</Th>
              <Th>Student Roll Number</Th>
              <Th>Student Section</Th>
            </Tr>
          </Thead>
          <Tbody>
            {studentInformation.map((item, index) => {
              return (
                <Tr key={index}>
                  <Td>{item.name}</Td>
                  <Td>{item.RollNo}</Td>
                  <Td>{item.section}</Td>
                  <Td>
                    <Button
                      bg="black"
                      color="white"
                      w="100px"
                      h="30px"
                      cursor="pointer"
                      onClick={() => Delete(item.RollNo, item.section)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
