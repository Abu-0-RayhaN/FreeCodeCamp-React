import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        Email: email,
      };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    }
  };
  return (
    <article>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstname">User Name: </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">add person</button>
      </form>
      {people.map((person) => {
        const { id, firstName, Email } = person;
        return (
          <div key={id} className="item">
            <label htmlFor="name">First Name: </label>
            <span id="name">{firstName}</span>
            <label htmlFor="mail"></label>
            <span id="mail">Email : {Email}</span>
          </div>
        );
      })}
    </article>
  );
};

export default ControlledInputs;
