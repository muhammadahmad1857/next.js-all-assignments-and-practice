import { useState } from "react";
import TodoType from "../(types)/todoType";
import { addDoc, collection } from "firebase/firestore";
import db from "../config/firebaseConfig";
import { getDocs } from "firebase/firestore";

export default function useTodoLogical() {
  const [tasks, setTask] = useState<string>("");
  const [isTrue, setIsTrue] = useState(false);
  const [fullTask, setFullTask] = useState<TodoType[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newItem, setNewItem] = useState();
  const [search, setSearch] = useState(``);
  const [searchResult, setSearchResult] = useState<TodoType[]>([]);
  const [dbTodo, setDbToDo] = useState([]);

  const task1: TodoType = {
    task: tasks,
    mellisecond:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  };

  async function taskFunction() {
    try {
      if (tasks != "") {
        setFullTask([task1, ...fullTask]);
        setIsTrue(false);
      } else {
        setIsTrue(true);
      }
      setTask("");

      const docRef = await addDoc(collection(db, "allTask"), {
        task: tasks,
      });
      console.log("docref", docRef);
    } catch (error) {
      console.log("add document error", error);
    }
  }

  const getDataFromDb = async () => {
    const querySnapshot = await getDocs(collection(db, "allTask"));
    const newArr: any[] = [];
    querySnapshot.forEach((doc) => {
      console.log(` ${doc.data().task}`);
      newArr.push(doc.data());
      console.log(newArr);
      setFullTask(newArr);
    });
  };

  function Delete(items: any) {
    const newTask = fullTask.filter((item: any, index: any) => index != items);
    console.log(newTask);
    setFullTask(newTask);
  }

  const updateHandler = (item: any, index: any) => {
    setTask(item);
    setNewItem(index);
    setIsUpdate(true);
  };

  const editHandler = () => {
    const newArray = fullTask.map((item, index) => {
      if (newItem == index) {
        const updatedTodo: TodoType = {
          task: tasks,
          mellisecond:
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
    setFullTask(searchedTask);
  };
  const handleSearchInputChange = (e: any) => {
    setSearch(e.target.value);
    searchhandler();
  };
  return {
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
  };
}
