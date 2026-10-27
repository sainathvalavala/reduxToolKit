/*
 * REDUX TOOLKIT FLOW — STEP 1: Define a slice (counter)
 * -----------------------------------------------------
 * createSlice() generates, from one object:
 *   - the reducer function  -> registered in store.js (STEP 2)
 *   - action creators       -> dispatched from Counter.jsx (STEP 4)
 * Action types are auto-generated as "<name>/<reducerKey>", e.g. "counter/inc".
 */
import { createSlice } from "@reduxjs/toolkit";

// starting value of this slice's state (state.counter in the store)
const initialState = {
  count: 0,
};

 export const counterSlice = createSlice({
  name: "counter", // prefix for generated action types
  initialState,
  reducers: {
    // Each reducer receives the current slice state (and optionally the action).
    // RTK uses Immer, so "mutating" code like state.count++ is safe —
    // Immer turns it into an immutable update behind the scenes.
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

// Action creators: inc() returns { type: "counter/inc" }, used with dispatch()
export const { inc, dec, reset } = counterSlice.actions;// for component
// Reducer: handles those actions and updates state.counter
const counterReducer = counterSlice.reducer;
export default counterReducer;//for store
