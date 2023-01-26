import React from "react";
import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterslice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counterReducer.value);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button aria-label="Decrement value" onClick={() => dispatch(incrementByAmount(4))}>
          by amount
        </button>
      </div>
    </div>
  );
}
