"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addHandler, deleteHandler, updateHandler } from "./(store)/todoSlice";

export default function Home() {
  const tasks = useSelector((store: any) => store.todoSlice.allTasks);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState<any>("");
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [index, setIndex] = useState<number>();

  const addingHandler = () => {
    if (userInput != "  ") {
      dispatch(addHandler(userInput));
      setUserInput(" ");
    } else {
      alert("Please Fill The Input Field!");
    }
  };

  const deletingHandler = (indexes: any) => {
    dispatch(deleteHandler(indexes));
  };
  const editHandler = (task: any, indexes: number) => {
    setIsUpdate(true);
    setUserInput(task);
    setIndex(indexes);
  };
  const cancelHandler = () => {
    setIsUpdate(false);
    setUserInput(" ");
  };
  const updatingHandler = () => {
    console.log("old ind", index);

    dispatch(updateHandler([userInput, index]));
    setUserInput(" ");
    setIsUpdate(false);
  };
  return (
    <div>
      <input
        style={{ width: "300px" }}
        type="text "
        placeholder="Write Task"
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
              backgroundColor: "greenyellow",
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
      <table
        style={{ backgroundColor: "black", color: "white", marginTop: "50px" }}
      >
        <thead>
          <tr>
            <th>Task No. #</th>
            <th>Tasks</th>
            <th>Date</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((item: any, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.task}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "salmon",
                      color: "white",
                      borderRadius: "20%",
                      width: "50px",
                      height: "30px",
                    }}
                    onClick={() => deletingHandler(index)}
                  >
                    del
                  </button>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "sandybrown",
                      color: "white",
                      borderRadius: "20%",
                      width: "50px",
                      height: "30px",
                      cursor: "pointer",
                    }}
                    onClick={() => editHandler(item.task, index)}
                  >
                    edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
