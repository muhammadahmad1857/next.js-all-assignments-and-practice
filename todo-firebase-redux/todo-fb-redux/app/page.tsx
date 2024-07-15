"use client";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "./types/reduxType";
import { addTodo, getTodo } from "./(store)/todoSlice";
import { addHandler } from "./(store)/todoSlice";
export default function Home() {



  useEffect(() => {
    gettingHandler();
  }, []);
  const tasks = useAppSelector((store) => store.TodoSlice.allTask) || []
  const dispatch = useAppDispatch();
  const [userInput, setUserInput] = useState();

const task1: any = {
  task: userInput,
  date:
    new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
};
  const addingHandler = () => {
    dispatch(addHandler(userInput))

    dispatch(addTodo([userInput,task1]));
    console.log("tasks",tasks);
    
  };


  const gettingHandler = () => {
    dispatch(getTodo());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Task"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={() => addingHandler()}>Add Task</button>

      <table>
        <thead>
          <tr>
          <th>#</th>
          <th>Task</th>
          <th>Date.</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          tasks.map((item,index)=>{
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.task}</td>
                <td>{item.date}</td>
                <td>
                  <button>Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  
      
       </div>
  );
}
