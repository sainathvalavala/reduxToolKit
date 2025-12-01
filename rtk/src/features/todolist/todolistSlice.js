import { createSlice } from "@reduxjs/toolkit"


const initialState={
  todo:['go to goa', 'fresh up','eat biryani', 'ride a bike']
}
 export const todolistSlice=createSlice({
  name:'todolist',
  initialState,
  reducers:{
    add_todo:(state,action)=>{
      state.todo.push(action.payload)
    },
    del_todo:(state, action)=>{
      state.todo.splice(action.payload,1)
    }
  }
})

export const {add_todo,del_todo} = todolistSlice.actions
// const todolistReducer =todolistSlice.reducer
// export default todolistReducer
export default todolistSlice.reducer