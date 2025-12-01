import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

 export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc: (state) => {
      state.count++;
    },
    dec: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
  },
});

export const { inc, dec, reset } = counterSlice.actions;// for component
const counterReducer = counterSlice.reducer;
export default counterReducer;//for store
