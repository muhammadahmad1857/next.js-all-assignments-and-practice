
"use client";
import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counterSlice";
export default configureStore({
  reducer: {
    CounterSlice,
  },
});
