"use client"

import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskInput, setNewTaskInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const addTask = () => {
    if (newTaskInput.trim() !== "") {
      const task_id = tasks.length + 1;
      const newTask = {
        id: task_id,
        task: newTaskInput,
        completed: false,
        image: imageInput,
        date: new Date().toLocaleDateString(),
      };
      setTasks([...tasks, newTask]);
      setNewTaskInput("");
      setImageInput("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, newTask) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, task: newTask };
        }
        return task;
      })
    );
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
    setShowCompleted(true);
  };

  const uncompleteTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: false };
        }
        return task;
      })
    );
    setShowCompleted(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1>To-Do List</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              ID
            </th>
            <th
              style={{
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Task
            </th>
            <th
              style={{
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Date
            </th>
            <th
              style={{
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Image
            </th>
            <th
              style={{
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              style={{
                backgroundColor: task.completed ? "#f0f0f0" : "transparent",
              }}
            >
              <td style={{ padding: "8px", textAlign: "left" }}>{task.id}</td>
              <td
                style={{
                  padding: "8px",
                  textAlign: "left",
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.task}
              </td>
              <td style={{ padding: "8px", textAlign: "left" }}>{task.date}</td>
              <td style={{ padding: "8px", textAlign: "left" }}>
                {task.image && (
                  <img
                    src={task.image}
                    alt="Task"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                )}
              </td>
              <td style={{ padding: "8px", textAlign: "left" }}>
                {!task.completed && (
                  <button onClick={() => completeTask(task.id)}>
                    Complete
                  </button>
                )}
                {showCompleted && task.completed && (
                  <button onClick={() => uncompleteTask(task.id)}>
                    Uncomplete
                  </button>
                )}
                <button onClick={() => removeTask(task.id)}>Remove</button>
                <button
                  onClick={() => updateTask(task.id, prompt("Enter new task:"))}
                >
                  Update
                </button>
                <button
                  onClick={() => setImageInput(prompt("Enter image URL:"))}
                >
                  Update Image
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={newTaskInput}
          onChange={(e) => setNewTaskInput(e.target.value)}
          style={{
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
          placeholder="Enter task"
        />
        <input
          type="text"
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
          style={{
            marginLeft: "10px",
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
          placeholder="Enter image URL"
        />
        <button
          onClick={addTask}
          style={{
            marginLeft: "10px",
            padding: "8px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
