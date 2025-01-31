import React, { useState } from "react";
import Card from "./Card";

export default function Form() {
  const [Data, setData] = useState("Hello");

  function GetData(e) {
    e.preventDefault();
    const data = e.target.elements.inputField.value
    setData(data)
    // setData();
    // setData(e.target.elements.Hello.value)
  }

  return (
    <div>
      <h1>Hello Form</h1>
      <h1>{Data}</h1>
      <form onSubmit={GetData}>
        <input type="text" name="inputField" placeholder="Hello type here..." />
        {/* <input type="text" name="Hello" placeholder="Hello type here..." /> */}
        <button type="submit">Get Data</button>
        <Card/>
      </form>
    </div>
  );
}
