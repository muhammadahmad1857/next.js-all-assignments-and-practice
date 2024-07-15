import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TodoType from "../types/todoType";
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../(dbConfig)/config";
import { useEffect } from "react";
import { it } from "node:test";


const addTodo = createAsyncThunk("toDo/addTodo", async (task: string) => {


  try {
    const docRef = await addDoc(collection(db, "Todos"), {
            tasks: task[0],
      date:
        new Date().toLocaleDateString() + `` + new Date().toLocaleTimeString(),
    });
    console.log("Document written with ID: ", docRef.id);
    console.log("task:", task[1]);
    const newobj=task[1]
    console.log('newobj',newobj);
    
    return newobj;
  } catch (e) {
    console.log("adding error", e);
  }
});
const getTodo = createAsyncThunk("todo/getTodo", async () => {
  console.log("working");

  try {
    const querySnapshot = await getDocs(collection(db, "Todos"));
    const newArr: any[] = [];

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      newArr.push(doc.data());
    });
    console.log(`newArr ${newArr}`);
    return newArr;
  } catch (e) {
    console.log("getting data error", e);
  }
});

// Then, handle actions in your reducers:
const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    allTask: [] as TodoType[],
  },
  reducers: {
   addHandler:(state,action)=>
   {
    const newObject1: any = {
      task: action.payload,
      date:
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
    };
    state.allTask = [newObject1, ...state.allTask];
    console.log(`state.item ${newObject1}`);
    
   }



  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(addTodo.fulfilled, (state, action) => {
        console.log(`action.payload of adding data ${action.payload}`);
        state.allTask = action.payload;
        console.log('state.allTask',state.allTask)  ;
        

      })
      .addCase(getTodo.fulfilled, (state, action) => {
        console.log(`action.payload of getting data ${action.payload
        }`);
        
         state.allTask = action.payload;
      });
  },
});
export default TodoSlice.reducer;
export { addTodo, getTodo }; // =TodoSlice.actions;
export const {addHandler}=TodoSlice.actions