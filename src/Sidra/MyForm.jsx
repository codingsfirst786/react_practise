import React, { useState } from "react";
import "./style.css";
import Form2 from './Form2';
export default function MyForm() {
  const [name, setname] = useState("");
  const [email,setemail] = useState("");
  const [password,setPassword] = useState("");
  const [displayData ,setDisplayData ] = useState(false)


  
  const Submission = ()=>{
setDisplayData (true)

  }

  return (
    <div className="formData">
      <h1>Admission Form</h1>
      <h2>{name.name} </h2>
      {/* <h2>{form.email} </h2> */}
      <input type="text" name="" id="" onChange={(e)=>setname(e.target.value)}/>
      <input type="text" name="" id="" onChange={(e)=>setemail(e.target.value)} />
      <input type="text" name="" id="" onChange={(e)=>setPassword(e.target.value)} />

      <div className="btn">
        <button onClick={Submission}>Display</button>
      </div>

     {displayData &&< Form2 name={name} email={email} password={password}/>} 
    </div>
  );
}
