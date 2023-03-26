import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, SetPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    SetPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)} className="">
              remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          SetPeople([]);
        }}
      >
        Clear Item
      </button>
    </>
  );
};

export default UseStateArray;
