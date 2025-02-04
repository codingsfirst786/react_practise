import React, { useState } from 'react'

export default function Form() {
    const[form, setForm]= useState ({name:'', number: '', gmail: ''})
    const updatechange = (e)=>{
    const{name, value}= e.target;
    setForm({...form, [name]: value ,

})
    }
  return (
   <>
   <h1>Form Data</h1>
   <h2>Name: {form.name}</h2>
   <h2>Number: {form.number}</h2>
   <h2>Email: {form.email}</h2>

   <input type='name' name='name' placeholder='Entre your name' value={form.name} onChange={updatechange}/>
   <input type='mumber' name='number' placeholder='Entre your nnumber' value={form.number} onChange={updatechange}/>
   <input type='email' name='email' placeholder='Entre your mail' value={form.email} onChange={updatechange}/>

   </>
  )
}