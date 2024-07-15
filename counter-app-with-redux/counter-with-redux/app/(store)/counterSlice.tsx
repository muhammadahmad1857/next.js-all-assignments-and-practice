"use client";
import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counters",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, reset, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
