import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value++;
    },
    // addToDo: (state, action) => {
    //   console.log("action", action.payload);
    //   state = action.payload;
    //   console.log(state);
    // },
    decrement: (state) => {
      state.value--;
    },
    reset: (state) => {
      state.value=0
    },
  },
});
export const { increment, decrement, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
