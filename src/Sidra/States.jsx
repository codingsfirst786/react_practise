import { useState } from 'react'
import React from 'react'

export default function States() {
    const[value,updateValue] = useState("Welcome Here") 
    function updatedata(){
        updateValue.map(()=>array[0])
        console.log({value})
    }
    const array = [("Good Morning"),( "Good Evening"),("Coding First")]
  return (
    <div>States
      <h1>{value}</h1> 
    <button onClick={updatedata}>click here</button>
    </div>
  )
}
