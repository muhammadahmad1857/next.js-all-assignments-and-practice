"use client";
import React from "react";
import { useState } from "react";
import { addHandler, deleteHandler, updateHandler } from "./(store)/todoSlice";
import { useAppSelector, useAppDispatch } from "./types/reduxType";

export default function Home() {
  const tasks = useAppSelector((store) => store.TodoSlice.allTasks);
  const dispatch = useAppDispatch();
  const [userInput, setUserInput] = useState<any>("");
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [indexes, setIndexes] = useState<number | undefined>();
  const addingHandler = () => {
    dispatch(addHandler(userInput));
    setUserInput(" ");
  };
  const deletingHandler = (index: any) => {
    dispatch(deleteHandler(index));
  };
  const editHandler = (task: string, index1: number) => {
    setIsUpdate(true);
    setUserInput(task);
    setIndexes(index1);
  };
  const cancelHandler = () => {
    setIsUpdate(false);
    setUserInput(" ");
  };
  const updatingHandler = () => {
    dispatch(updateHandler([userInput, indexes]));
    setUserInput(" ");
    setIsUpdate(false);
  };
  return (
    <div>
      <h1>hello world</h1>
      <input
        type="text"
        placeholder="Enter Task"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      {!isUpdate ? (
        <button
          style={{
            border: "none",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "20px",
            width: "100px",
            height: "30px",
            marginLeft: "30px",
          }}
          onClick={() => addingHandler()}
        >
          Add Task
        </button>
      ) : (
        <>
          <button
            style={{
              border: "none",
              backgroundColor: "salmon",
              color: "white",
              borderRadius: "20px",
              width: "100px",
              height: "30px",
              marginLeft: "30px",
            }}
            onClick={() => updatingHandler()}
          >
            Update
          </button>
          <button
            style={{
              border: "none",
              backgroundColor: "grey",
              color: "white",
              borderRadius: "20px",
              width: "100px",
              height: "30px",
              marginLeft: "30px",
            }}
            onClick={() => cancelHandler()}
          >
            Cancel
          </button>
        </>
      )}
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Tasks</td>
            <td>Date</td>
            <td>Actions</td>
          </tr>
        </thead>

        {tasks.map((item: any, index: number) => {
          return (
            <tr>
              <td>{index + 1}</td>

              <td>{item.task}</td>
              <td>{item.date}</td>
              <td>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "20px",
                    width: "100px",
                    height: "30px",
                  }}
                  onClick={() => deletingHandler(index)}
                >
                  Delete
                </button>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "20px",
                    width: "100px",
                    height: "30px",
                    marginLeft: "30px",
                  }}
                  onClick={() => editHandler(item.task, index)}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
