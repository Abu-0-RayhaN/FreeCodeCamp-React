import React, { useState } from "react";
const [value, setValue] = useState(0);
const UseStateCounter = () => {
  return (
    <div className="container">
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setValue(value + 1)}
      >
        Increase
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setValue(value - 1)}
      >
        Decrease
      </button>
      <button type="button" className="btn btn-info" onClick={setValue(0)}>
        Reset
      </button>
    </div>
  );
};

export default UseStateCounter;
