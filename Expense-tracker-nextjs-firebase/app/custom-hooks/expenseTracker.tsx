"use client";
import { useEffect, useState } from "react";
import expenseType from "../type/expenseTrackerType";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/config";
import { getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function useExpenseTracker() {
  const [savedIndex, setSavedIndex] = useState<any>();
  const [userInputTransaction, setUserInputTransaction] = useState<any>();
  const [userInputDescription, setUserInputDescription] = useState<string>("");
  const [income, setIncome] = useState<number>(0.0);
  const [expense, setExpense] = useState<number>(0);
  const [transactionHistory, setTransactionHistory] = useState<expenseType[]>(
    []
  );
  const [Totalincome, setTotalIncome] = useState<number>();
  const [Totalexpense, setTotalExpense] = useState<number>();
  const [isUpdate, setisUpdate] = useState(false);
  const [currentBalance, setCurrentBalance] = useState<number>(0);
  const [savedId, setSavedId] = useState("");
  const [imagename, setImageName] = useState<any>();
  const storage = getStorage();
  const storageRef = ref(storage);
  const [reference, setReference] = useState<any>();
  console.log(`storage ${storage.app.name}`);

  useEffect(() => {
    getDataFromDb();
  }, []);
  const addTransaction = async () => {
    const transactionObj: expenseType = {
      description: userInputDescription,
      transaction: userInputTransaction,
    };

    try {
      if (userInputTransaction !== "" && userInputDescription !== "") {
        if (userInputTransaction < 0) {
          setExpense(expense - parseInt(userInputTransaction));
        } else {
          setIncome(income + parseInt(userInputTransaction));
        }
        setCurrentBalance(currentBalance + parseInt(userInputTransaction));
        setTransactionHistory([transactionObj, ...transactionHistory]);
        setTotalIncome(income);
      }
      // else {
      //   alert("Please fill all input field");
      // }

      setUserInputTransaction("");
      setUserInputDescription("");
      // setIncome(currentBalance);

      // if (userInputTransaction != "" && userInputDescription != "") {
      const docRef: any = await addDoc(collection(db, "expensetracker"), {
        description: userInputDescription,
        transaction: userInputTransaction,
        // imageref: imagename,
      });
      // }
      //  const incomeRef=await addDoc(collection(db,"income"),{
      //   income:
      //  })
      console.log("Document written with ID: ", docRef.id);
        const imagesRef =    ref(storage, `images/${imagename.name}`);
        // 'file' comes from the Blob or File API
      const imgRef = await uploadBytes(imagesRef, `${imagename}`)
        console.log('imgRef',imgRef);

      const url= await getDownloadURL(imgRef.ref).then((url)=>{
        setReference(url)
        })

        }
     catch(e) {
      console.error("Error adding document: ", e);
    }
  };
  const incrementFunction = () => {
    if (userInputTransaction !== "") {
      setUserInputTransaction(parseInt(userInputTransaction) + 1);
    } else {
      setUserInputTransaction(0 + 1);
    }
  };
  const decrementFunction = () => {
    if (userInputTransaction !== "") {
      setUserInputTransaction(parseInt(userInputTransaction) - 1);
    } else {
      setUserInputTransaction(0 - 1);
    }
  };
  const getDataFromDb = async () => {
    const querySnapshot = await getDocs(collection(db, "expensetracker"));
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);

      data.push({
        description: doc.data().description,
        transaction: doc.data().transaction,
        docid: doc.id,
        // imageref:doc.data().imageref
      });
    });
    setTransactionHistory(data);
    // setTotalIncome(doc.data().transaction);
    // console.log("hello world");

    // for (let i = 0; i < transactionHistory.length; i++) {
    //   console.log('imageref:',transactionHistory[i].imageref);
    // }
  };
  // console.log(`reference ${reference}`);

  const deleteHandler = async (
    idparam: any,
    indexparam: any,
    transactionparam: number
  ) => {
    try {
      // console.log("idparam", idparam);
      // console.log("indexparam", indexparam);

      const deleted_items = await deleteDoc(doc(db, "expensetracker", idparam));
      // console.log(`deleted Items ${deleted_items}`);

      const newarr = transactionHistory.filter((items: any, index: any) => {
        // console.log("param", index);
        return index !== indexparam || items.docid !== idparam;
      });

      setTransactionHistory(newarr);
      setCurrentBalance(currentBalance - transactionparam);
    } catch (e) {
      console.log("Deleting error", e);
    }
  };

  const editHandler: any = (
    transaction: number,
    Description: string,
    id: string,
    index: number
  ) => {
    setUserInputTransaction(transaction);
    setUserInputDescription(Description);
    setisUpdate(true);
    setSavedId(id);
    setSavedIndex(index);
    // console.log("saved id ", savedId);
  };

  const updateHandler = async () => {
    try {
      const updatedObj = await doc(db, "expensetracker", `${savedId}`);

      await updateDoc(updatedObj, {
        transaction: userInputTransaction,
        description: userInputDescription,
      });
      // console.log("saved id", savedId);

      const newarr = transactionHistory.map((item: any, index: any) => {
        if (savedId == item.docid || index == savedIndex) {
          const updatedvalue = {
            description: userInputDescription,
            transaction: userInputTransaction,
          };
          return updatedvalue;
        } else {
          return item;
        }
      });

      // console.log(" checking the update handler is working or not");

      setTransactionHistory(newarr);
      setisUpdate(false);
      setUserInputDescription("");
      setUserInputTransaction("");
    } catch (e) {
      console.log(`editing error ${e}`);
    }
  };

  const cancelHandler = () => {
    setUserInputDescription("");

    setUserInputTransaction("");
    setisUpdate(false);
  };
  // console.log("file", imagename);

  // console.log("image name",imagename);
  return {
    userInputTransaction,
    setUserInputTransaction,
    income,
    setIncome,
    editHandler,
    expense,
    setExpense,
    addTransaction,
    setUserInputDescription,
    userInputDescription,
    transactionHistory,
    setTransactionHistory,
    currentBalance,
    deleteHandler,
    cancelHandler,
    isUpdate,
    updateHandler,
    incrementFunction,
    decrementFunction,
    // imagename,
    // setImageName,
  };
}
