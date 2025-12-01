import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <div>
        counter:{count} <br />
        <button aria-label="Increment value" onClick={() => dispatch(inc())}>
          Increment
        </button>

        <button aria-label="Decrement value" onClick={() => dispatch(dec())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
