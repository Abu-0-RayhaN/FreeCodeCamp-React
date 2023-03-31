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
  const [count2, dispatch2] = useReducer(reducer, initialState);

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
      <div>Count :{count2}</div>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          dispatch2("increment");
        }}
      >
        Increment
      </button>
      &nbsp;&nbsp;
      <button
        type="button"
        onClick={() => {
          dispatch2("decrement");
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default sumit;
