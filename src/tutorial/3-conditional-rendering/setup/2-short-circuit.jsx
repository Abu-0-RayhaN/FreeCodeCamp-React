import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("a");
  const firstValue = text || "hello world";
  const secondValue = text && "a" && "omi";
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <div>
      <h1>{text || "john doe"}</h1>
      <h2>{text && "ami"}</h2>
    </div>
  );
};

export default ShortCircuit;
