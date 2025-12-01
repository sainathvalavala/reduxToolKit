import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_todo, del_todo } from "./todolistSlice";
function Todolist() {
  let x = useSelector((state) => state.todolist.todo);
  console.log(x);
  let dispatch = useDispatch();
  let [ntd, setntd] = useState("");
  return (
    <div>
      Todolist:{" "}
      <input
        type="text"
        onChange={(e) => {
          setntd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(add_todo(ntd));
        }}
      >
        Add todo
      </button>
      <ul>
        {x.map((todo, i) => {
          return (
            <li key={i}>
              {todo}{" "}
              <button
                onClick={() => {
                  dispatch(del_todo(i));
                }}
              >
                delete todo
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
