import {useState} from "react";
import React from 'react'
// import React, { useState } from 'react';

export default function Home() {
  const [value,setValue] = useState("")
  return (
    <div className="m-auto">
      <div className="box bg-secondary m-auto p-4" style={{height:"460px",width:"600px"}}>
      <h1>Hello Coders</h1>
      <input type="text" placeholder="enter text here" onChange={(i)=>setValue(i.target.value)}  />
      <br />
      <textarea name="enter text" value={value} id="" onChange={(i)=>setValue(i.target.value)}className="mt-4 mx-4 p-4" style={{height:"200px",width:"400px"}} >send data here</textarea>
      </div>
      
    </div>
  )
}

