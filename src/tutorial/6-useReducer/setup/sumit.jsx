import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      if (state <= 0) {
        state = 0;
      } else {
        return state - 1;
      }
    default:
      return state;
  }
};

function sumit() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Count :{count}</div>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      &nbsp;&nbsp;
      <button
        type="button"
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default sumit;
