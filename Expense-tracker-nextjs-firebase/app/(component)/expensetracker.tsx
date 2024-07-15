// "use client";

import React from "react"; // Added import for React
import {
  Heading,
  Box,
  Input,
  Text,
  Button,
  Flex,
  Tr,
  Td,
  Table,
  Tbody,
  TableCaption,
  FormControl,
  TableContainer,
  NumberInput,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import useExpenseTracker from "../custom-hooks/expenseTracker"; // Changed import name to be consistent with function name
import {
  PlusSquareIcon,
  EditIcon,
  DeleteIcon,
  TriangleUpIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import styles from "../page.module.css";
export default function ExpenseTracker() {
  const {
    userInputTransaction,
    setUserInputTransaction,
    income,
    deleteHandler,
    setIncome,
    expense,
    setExpense,
    transactionHistory,
    addTransaction,
    incrementFunction,
    decrementFunction,
    setUserInputDescription,
    userInputDescription,
    currentBalance,
    editHandler,
    isUpdate,
    cancelHandler,
    updateHandler,
    imagename,
    setImageName,
  } = useExpenseTracker();

  return (
    <Box textAlign={"center"} bg="#f0f0f0">
      <Box>
        <Heading>Expense Tracker by Ahmad Jawad</Heading>
        <Box mt="30px">
          <Text fontSize={"3xl"}>CURRENT BALANCE</Text>
          <Text fontSize={"2xl"}>${currentBalance}</Text>
        </Box>
        <Flex justify={"center"}>
          <Flex
            className={styles.btn1}
            bg="white"
            boxShadow={"dark-lg"}
            justify={"center"}
            h="100px"
            w="300px"
            mt={"20px"}
            gap={"20px"}
          >
            <Box mt="30px" textAlign={"center"}>
              <Text fontWeight={"bolder"}>INCOME</Text>
              <Text color="burlywood">{income}</Text>
            </Box>
            <Box pt="30px">
              <Box
                w="2px"
                h="50px"
                bg="blue"
                // mr="100px"
                m="0 auto 40px"
                borderRadius={"10px"}
              ></Box>
            </Box>
            <Box mt="30px">
              <Text fontWeight={"bolder"}>EXPENSE</Text>
              <Text color="teal">{expense}</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box mt="20px">
        <Text fontSize={"2xl"}>Transaction History</Text>
        <Box m={"auto"} textAlign="center">
          <hr
            className={styles.btn}
            style={{ borderColor: "black", width: "300px", margin: "auto" }}
          />
        </Box>
        <TableContainer w="400px" m="auto">
          <Table overflow="scroll" bg="white">
            <TableCaption color="teal">
              Here You See Your Transaction History
            </TableCaption>

            <Tbody>
              {transactionHistory.map((item, index) => (
                <Tr
                  className={styles.btn}
                  borderRight={
                    userInputTransaction < 0
                      ? "6px solid burlywood"
                      : "6px solid lightblue"
                  }
                  w="500px"
                  key={index}
                  _hover={{
                    bg: userInputTransaction < 0 ? "burlywood" : "lightblue",
                  }}
                >
                  <Td>{item.description}</Td>
                  <Td>{item.transaction}</Td>
                  <Td>{item.docid}</Td>
                  <Td>
                    <Button
                      w="30px"
                      color={"white"}
                      bg="red"
                      onClick={() =>
                        deleteHandler(item.docid, index, item.transaction)
                      }
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      ml="5px"
                      w="30px"
                      color={"white"}
                      bg="teal"
                      onClick={() =>
                        editHandler(
                          item.transaction,
                          item.description,
                          item.docid,
                          index
                        )
                      }
                    >
                      <EditIcon />
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box mt="50px">
        <Text fontSize={"2xl"}>Add New Transaction</Text>
        <Box m={"auto"} textAlign="center">
          <hr
            className={styles.btn}
            style={{ borderColor: "black", width: "300px", margin: "auto" }}
          />
        </Box>
        <Box w="500px" m="auto" mt="30px" className={styles.btn}>
          <FormControl>
            <Input
              onChange={(e) => setUserInputDescription(e.target.value)}
              placeholder="Detail Of Transaction"
              title="Enter your transaction description"
              required
              value={userInputDescription}
              autoCapitalize={userInputDescription}
            />
          </FormControl>
          <NumberInput mt="30px">
            <Input
              type="number"
              placeholder="enter dollar-value of transaction"
              title="Enter your amount"
              onChange={(e) => setUserInputTransaction(e.target.value)}
              value={userInputTransaction}
            />
            <NumberInputStepper>
              <NumberIncrementStepper onClick={() => incrementFunction()} />
              <NumberDecrementStepper onClick={() => decrementFunction()} />
            </NumberInputStepper>
          </NumberInput>
          <FormControl>
            {!isUpdate ? (
              <Button
                className={styles.btn}
                onClick={() => addTransaction()}
                mt="30px"
                w="500px"
                color={"white"}
                bg="#6e9fdf"
              >
                Add Transaction
                <PlusSquareIcon h="30px" w="50px" />
              </Button>
            ) : (
              <>
                <Button
                  className={styles.btn}
                  onClick={() => updateHandler()}
                  mt="30px"
                  w="500px"
                  color={"white"}
                  bg="teal"
                >
                  Update
                </Button>
                <Button
                  className={styles.btn}
                  onClick={() => cancelHandler()}
                  mt="30px"
                  w="500px"
                  color={"white"}
                  bg="salmon"
                >
                  cancel
                </Button>
              </>
            )}
          </FormControl>
        </Box>
      </Box>
      <Input type="file" onChange={(e) => setImageName(e.target.files[0])} />
      <Text
        title="This is an editable text you canedit this"
        contentEditable="true"
        border={"none"}
      >
        Here is an editable Textaragraph. Try to change this text.
      </Text>

      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. tjis is copid by <kbd>ctrl + V</kbd>
      </Text>
    </Box>
  );
}
