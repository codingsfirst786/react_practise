import React from "react";
import "./style.css";
export default function Form2({name,email,password}) {


  return (
    <div className="card">
      <h1>Display Input Data</h1>
      <input type="text"value={name} />
      <input type="text"value={email} />
      <input type="text"value={password} />
    </div>
  );
}
