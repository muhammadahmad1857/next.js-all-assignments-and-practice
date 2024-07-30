import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/db-config";
export default function UseLogical() {
  const [userInput, setUserInput] = useState(``);
  const [allTask, setAllTask] = useState<any>([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newItem, setnewItem] = useState();
  const Taskobj = {
    task: userInput,
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  };
  useEffect(() => {
    getDataFromDb();
  }, []);
  async function AddTask() {
    try {
      if (userInput !== "") {
        setAllTask([Taskobj, ...allTask]);
        console.log(allTask);
      } else {
        alert("please enter task");
      }
      setUserInput("");

      if (userInput !== "") {
        const docRef = await addDoc(collection(db, "Todo"), {
          task: userInput,
          date:
            new Date().toLocaleDateString() +
            " " +
            new Date().toLocaleTimeString(),
        });
      }
    } catch (error) {
      console.log("add document error", error);
    }
  }
  const getDataFromDb = async () => {
    const querySnapshot = await getDocs(collection(db, "Todo"));
    const dbData: any = [];
    querySnapshot.forEach((doc: any) => {
      console.log(` ${doc.data().task}`);
      console.log("id taken from firebase", doc.id);

      dbData.push({ task: doc.data().task, date: doc.data().date, id: doc.id });

      setAllTask(dbData);
    });
  };

  function editHandler(item: any, id: any) {
    setUserInput(item);
    setIsUpdate(true);
    setnewItem(id);
  }

  const updatehandler = async () => {
    try {
      const updatevariable = doc(db, "Todo", `${newItem}`);
      await updateDoc(updatevariable, {
        task: userInput,
      });

      const newObj = allTask.map((item: any, index: any) => {
        if (newItem == item.id) {
          const updatedTodo = {
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
      setAllTask(newObj);
      setIsUpdate(false);
      setUserInput("");
    } catch (error) {
      console.log("Updating error", error);
    }
  };
  const cancelHandler = () => {
    setUserInput("");
    setIsUpdate(false);
    console.log("check wether that cnacel handler is working or not");
  };
  async function delhandler(itemId: any) {
    try {
      const newTask = allTask.filter((item: any) => item.id != itemId);
      console.log(newTask);
      setAllTask(newTask);

      const deletedItemData = await deleteDoc(doc(db, "Todo", itemId));
      console.log("deletedItemData", deletedItemData);
    } catch (error) {
      console.log("delete error", error);
    }
  }
  return {
    AddTask,
    userInput,
    setUserInput,
    allTask,
    setAllTask,
    Taskobj,
    isUpdate,
    setIsUpdate,
    updatehandler,
    cancelHandler,
    editHandler,
    delhandler,
    getDataFromDb,
  };
}
