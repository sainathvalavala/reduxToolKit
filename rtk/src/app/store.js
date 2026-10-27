/*
 * REDUX TOOLKIT FLOW — STEP 2: Create the store
 * ---------------------------------------------
 * configureStore() builds the single global store. It:
 *   - combines the slice reducers (each key below becomes a top-level piece of state)
 *   - adds Redux DevTools support and default middleware (e.g. redux-thunk) automatically
 * The store is then passed to <Provider> in main.jsx (STEP 3).
 */
import { configureStore } from "@reduxjs/toolkit";
// default exports of the slices are their reducers
import counterReducer from "../features/counter/counterSlice";
import todolistReducer from "../features/todolist/todolistSlice"

export const store = configureStore({
  reducer: {
    // state shape: { counter: { count }, todolist: { todo: [] } }
    // components read it as state.counter.count / state.todolist.todo
    counter:counterReducer,
    todolist:todolistReducer
  },
});
