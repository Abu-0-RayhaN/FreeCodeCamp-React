import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/masum-billah";
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("No User Found");
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  });
  console.log(user);
  if (loading) {
    return (
      <div>
        <h2>Loading..</h2>
      </div>
    );
  }
  if (isError) {
    <div>
      <h1>Error..</h1>
    </div>;
  }

  return <h2>{user}</h2>;
};

export default MultipleReturns;
