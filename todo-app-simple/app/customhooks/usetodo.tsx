import { useState } from "react";

import TodoClass from "../Class/class";

export default function useTodoLogical() {
  const [userInput, setTask] = useState<string>("");
  const [isTrue, setIsTrue] = useState(false);
  const [fullTask, setFullTask] = useState<TodoClass[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newItem, setNewItem] = useState<any>();
  const [search, setSearch] = useState(``);
  const [searchResult, setSearchResult] = useState<TodoClass[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const newtodoclass = new TodoClass(
    userInput,
    new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
  );

  async function taskFunction() {
    if (userInput != "") {
      setFullTask([newtodoclass, ...fullTask]);
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
    setTask("");
  }

  async function Delete(itemId: any) {
    const newTask = fullTask.filter((item: any) => item.task != itemId);
    console.log(newTask);
    setFullTask(newTask);
  }

  const updateHandler = (item: any, index: number) => {
    setTask(item);
    setNewItem(index);
    setIsUpdate(true);
  };

  const editHandler = async () => {
    const newArray = fullTask.map((item, index) => {
      if (newItem == index) {
        const updatedTodo: TodoClass = {
          task: userInput,
          date:
            new Date().toLocaleDateString() +
            " " +
            new Date().toLocaleTimeString(),
        };
        return updatedTodo;
      } else {
        return item;
      }
    });
    setFullTask(newArray);
    setIsUpdate(false);
    setTask("");
  };
  const cancelhandler = () => {
    setTask("");
    setIsUpdate(false);
  };
  const searchhandler = () => {
    const searchedTask = fullTask.filter((param2) =>
      param2.task.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResult(searchedTask);
  };
  const handleSearchInputChange = (e: any) => {
    setSearch(e.target.value);
    searchhandler();
  };
  return {
    userInput,
    isTrue,
    fullTask,
    isUpdate,
    newItem,
    search,
    searchResult,
    newtodoclass,
    taskFunction,
    Delete,
    updateHandler,
    editHandler,
    cancelhandler,
    searchhandler,
    handleSearchInputChange,
    setTask,
    isLoading,
    setIsLoading,
  };
}
