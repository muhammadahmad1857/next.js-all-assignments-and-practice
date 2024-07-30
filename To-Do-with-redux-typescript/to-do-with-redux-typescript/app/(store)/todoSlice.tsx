import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../(store)/store";
import Todotype from "../(type)/todoType";


export const todoSlice = createSlice({
  name: "Todo",
  initialState: {
    allTask: [] as Todotype[]
  },
  reducers: {
    addHandler: (state, action) => {
        const newObject1 = {
          task: action.payload,
          date:
            new Date().toLocaleDateString() +
            " " +
            new Date().toLocaleTimeString(),
        };

        state.allTask = [newObject1, ...state.allTask];
        console.log(state.allTask);
      }
    ,
    deleteHandler: (state:any, action:PayloadAction<number>) => {
      var filteredArray = state.allTask.filter((item:any, index:number) => {
        console.log(index);
        return action.payload !== index;
      });
      state.allTask = filteredArray;
      console.log(action.payload);
      console.log(filteredArray);
    },

    updateHandler: (state:any, action:PayloadAction<number[]>) => {
      const newObject = state.allTask.map((item:any, index:any) => {
        console.log("indexes", index, action.payload[1]);

        if (index === action.payload[1]) {
          const updatedTodo = {
            task: action.payload[0],
            date:
              new Date().toLocaleDateString() +
              " " +
              new Date().toLocaleTimeString(),
          };
          console.log(updatedTodo.task);

          return updatedTodo;
        } else {
          return item;
        }
      });
      state.allTask = newObject;
      console.log(newObject);
    },
  

  

  },
});
export const { addHandler, deleteHandler, updateHandler } = todoSlice.actions;
export default todoSlice.reducer;