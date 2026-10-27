/*
 * REDUX TOOLKIT FLOW — App component
 * ----------------------------------
 * App doesn't touch Redux directly and passes no props. Because main.jsx wraps
 * App in <Provider>, Counter and Todolist can each connect to the store
 * themselves via useSelector / useDispatch (STEP 4) — no prop drilling.
 */
import React from "react";
import Counter from "./features/counter/counter";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div style={{ border: "2px solid red", padding: "10px", marginTop: "3px" }}>
      App component:
      <div
        style={{ border: "2px solid green", padding: "10px", marginTop: "3px" }}
      >
        {/* reads/writes state.counter */}
        <Counter></Counter>
      </div>
      <div
        style={{ border: "2px solid  blue", padding: "10px", marginTop: "3px" }}
      >
        {/* reads/writes state.todolist */}
        <Todolist></Todolist>
      </div>
    </div>
  );
}

export default App;
