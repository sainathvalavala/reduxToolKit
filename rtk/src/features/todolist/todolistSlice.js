/*
 * REDUX TOOLKIT FLOW — STEP 1: Define a slice (todolist)
 * ------------------------------------------------------
 * What is a slice?
 *   A slice is one self-contained piece of the global Redux state, together
 *   with the logic that is allowed to change it. Here the slice owns the
 *   list of todos and the two ways to change it: adding and deleting.
 *
 * What createSlice() does for us:
 *   From a single config object (name, initialState, reducers) it generates:
 *     1. A reducer function  -> the function Redux calls to compute new state.
 *     2. Action creators     -> one function per reducer key (add_todo, del_todo)
 *                               that builds the action object for you.
 *     3. Action types        -> strings built as "<name>/<reducerKey>",
 *                               e.g. "todolist/add_todo", "todolist/del_todo".
 *   Without RTK you would write the action type constants, the action creator
 *   functions and a switch-case reducer by hand.
 *
 * What is action.payload?
 *   An action is a plain object: { type, payload }.
 *     - type    tells Redux WHICH reducer should handle it.
 *     - payload carries the DATA the reducer needs.
 *   Whatever you pass into the action creator becomes the payload:
 *     add_todo("buy milk") -> { type: "todolist/add_todo", payload: "buy milk" }
 *     del_todo(2)          -> { type: "todolist/del_todo", payload: 2 }
 *
 * The full cycle for this slice:
 *   dispatch(add_todo("buy milk"))
 *     -> Redux sends the action to this slice's reducer
 *     -> the "add_todo" case runs and pushes "buy milk" into state.todo
 *     -> Redux stores the new state
 *     -> any component reading the todo list re-renders with the new item
 *
 * Why is "mutating" state allowed here?
 *   Redux requires immutable updates (never change the old state object).
 *   RTK uses a library called Immer inside createSlice: `state` is a draft
 *   copy, so push/splice on it are recorded and Immer produces a brand-new
 *   immutable state from those changes. Outside createSlice, push/splice on
 *   Redux state would be a bug.
 */
import { createSlice } from "@reduxjs/toolkit"


// The state this slice starts with when the app first loads.
// Shape: { todo: string[] } — an array of todo texts.
const initialState={
  todo:['go to goa', 'fresh up','eat biryani', 'ride a bike']
}
 export const todolistSlice=createSlice({
  // Used as the prefix for every generated action type ("todolist/...")
  name:'todolist',
  initialState,
  // Each key here becomes both a reducer case AND an action creator of the same name.
  // Every reducer receives (state, action): the current draft state and the dispatched action.
  reducers:{
    // add_todo(text): payload is the new todo text; appends it to the end of the list
    add_todo:(state,action)=>{
      state.todo.push(action.payload)
    },
    // del_todo(index): payload is the array index; splice removes exactly 1 item at that position
    del_todo:(state, action)=>{
      state.todo.splice(action.payload,1)
    }
  }
})

// Named exports: the auto-generated action creators.
// Components call dispatch(add_todo(text)) / dispatch(del_todo(index)) to request a state change.
export const {add_todo,del_todo} = todolistSlice.actions
// const todolistReducer =todolistSlice.reducer
// export default todolistReducer
// Default export: the generated reducer. It gets registered when the store is
// configured, under the key that decides where this state lives (e.g. state.todolist).
export default todolistSlice.reducer
