/*
 * REDUX TOOLKIT FLOW — STEP 3: Provide the store to React
 * ------------------------------------------------------
 * Full flow in this app:
 *   1. counterSlice.js / todolistSlice.js -> createSlice() defines state, reducers & actions
 *   2. store.js                           -> configureStore() combines slice reducers into one store
 *   3. main.jsx (this file)               -> <Provider> makes the store available to every component
 *   4. Counter.jsx / Todolist.jsx         -> useSelector() reads state, useDispatch() sends actions
 *   5. dispatch(action) -> store runs the matching reducer -> state updates -> subscribed components re-render
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Provider comes from react-redux (the React bindings for Redux)
import {Provider} from 'react-redux'
// the single store created in store.js
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  // Wrap the whole app in <Provider> so any child can use useSelector / useDispatch
  <Provider store={store}>
    <App />
  </Provider>
)
