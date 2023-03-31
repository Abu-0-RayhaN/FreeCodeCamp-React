import React, { useReducer } from "react";

const initialState = {
  counter: 0,
  counter2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };
    default:
      return state;
  }
};

function sumit() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Counting :{count.counter}</div>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: "increment",
            value: 1,
          });
        }}
      >
        Increment by 1
      </button>
      &nbsp;&nbsp;
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: "decrement",
            value: 1,
          });
        }}
      >
        Decrement
      </button>
      <div>Counting2 :{count.counter2}</div>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: "increment2",
            value: 1,
          });
        }}
      >
        Increment by 1
      </button>
      &nbsp;&nbsp;
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: "decrement2",
            value: 1,
          });
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default sumit;
