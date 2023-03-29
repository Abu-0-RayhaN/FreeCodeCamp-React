import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [data, setData] = useState("show and hide");
  const [show, setShow] = useState(true);
  const showData = () => {
    if (data == "") {
      setData("show and hide");
    } else {
      setData("");
    }
  };
  return (
    <>
      <button className="btn btn-success" onClick={() => showData()}>
        show/hide
      </button>

      <h2 id="sAndh">{data}</h2>
    </>
  );
};

export default ShowHide;
