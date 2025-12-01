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
        <Counter></Counter>
      </div>
      <div
        style={{ border: "2px solid  blue", padding: "10px", marginTop: "3px" }}
      >
        <Todolist></Todolist>
      </div>
    </div>
  );
}

export default App;
