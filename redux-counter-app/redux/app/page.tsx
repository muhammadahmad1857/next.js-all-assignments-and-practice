"use client";
import { useSelector, useDispatch } from "react-redux";
import { reset,decrement, increment } from "./(store)/counterSlice";
import { useState } from "react";

export default function Home() {
  const count = useSelector((store) => store.CounterSlice.value);
  const dispatch = useDispatch();
  // const [task, setTask] = useState("");
  // const onClickHandler = () => {
  //   dispatch((task));
  // };
  return (
    <div>
      <h1
        style={{
          marginTop: "-20px",
          fontSize: "150px",
          textAlign: "center",
          marginBottom: "-30px",
        }}
      >
        Redux Practice
      </h1>
      <hr />
      {/* <input
        type="text"
        placeholder="enter task"
        onChange={(e) => setTask(e.target.value)}
      /> */}
      <br />
      {/* {task} */}
      <br />
      {/* <button onClick={() => onClickHandler()}>Add task</button> */}

      <h1>{count}</h1>
      <div style={{display:"flex",gap:"10px"}}>
        
      <button onClick={() => dispatch(increment())}>+</button>
      { count!=0&&
      <button onClick={() => dispatch(reset())}>Reset</button>
  }    <button onClick={() => dispatch(decrement())}>-</button>
    </div>
    </div>
  );
}
