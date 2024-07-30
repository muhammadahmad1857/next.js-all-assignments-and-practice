import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Tables() {
  const [students, setStudents] = useState([
    {
      name: "Ahmad",
      RollNo: 1,
      section: "A",
    },
    {
      name: "Sheraz",
      RollNo: 2,
      section: "A",
    },
    {
      name: "Ali",
      RollNo: 3,
      section: "A",
    },
    {
      name: "Shahzaib",
      RollNo: 3,
      section: "B",
    },
    {
      name: "Azaan",
      RollNo: 1,
      section: "B",
    },
    {
      name: "Mohed",
      RollNo: 4,
      section: "B",
    },

    {
      name: "Nuraiz",
      RollNo: 2,
      section: "B",
    },
    {
      name: "Asad",
      RollNo: 7,
      section: "B",
    },
    {
      name: "Abubakar",
      RollNo: 9,
      section: "g",
    },
    {
      name: "Ayaan",
      RollNo: 19,
      section: "c",
    },
    {
      name: "Umair",
      RollNo: 21,
      section: "f",
    },
  ]);
  function Delete(RollNo: number, section: string) {
    const newStudents = students.filter(
      (item) => item.RollNo !== RollNo || item.section !== section
    );
    setStudents(newStudents);
  }
  return (
    <>
      <TableContainer
        mt={"5"}
        mx={"auto"}
        w={"50%"}
        overflow={"auto"}
        textAlign={"center"}
        border={2}
      >
        <Table border={2} variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Student NO.</Th>
              <Th>Student Name</Th>
              <Th>Student Roll # </Th>
              <Th>Section </Th>
              <Th> Action </Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((items, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{items.name}</Td>
                <Td>{items.RollNo}</Td>
                <Td>{items.section}</Td>
                <Td>
                  <Button onClick={() => Delete(items.RollNo, items.section)}>
                    Delete
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
