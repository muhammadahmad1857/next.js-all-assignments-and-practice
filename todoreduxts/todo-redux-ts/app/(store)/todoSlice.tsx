import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import TodoType from "../types/todoType";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    allTasks: [] as TodoType[],
  },
  reducers: {
    addHandler: (state, action: PayloadAction<string>) => {
      const newObject1 = {
        task: action.payload,
        date:
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString(),
      };

      state.allTasks = [newObject1, ...state.allTasks];

      console.log(state.allTasks);
    },
    deleteHandler: (state, action: PayloadAction<number>) => {
      var filteredTasks = state.allTasks.filter((item, index) => {
        return action.payload !== index;
      });
      state.allTasks = filteredTasks;
      console.log(filteredTasks);
    },
    updateHandler: (state, action: PayloadAction<(string | number)[]>) => {
      const newObject = state.allTasks.map((item: any, index: any) => {
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
      state.allTasks = newObject;
    },
  },
});
export const { addHandler, deleteHandler, updateHandler } = TodoSlice.actions;
export default TodoSlice.reducer;
