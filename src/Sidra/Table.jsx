import React from 'react'

export default function Input() {
   const formData = [
      {Name:"Abdullah", Age : 22 , Marks : 450},
      {Name:"Sehar" , Age : 20 ,Marks : 490},
      {Name:"Rehman", Age : 21 , Marks : 410},
      {Name:"Bilal", Age : 23 ,Marks : 400},
      ]
  return (
    <>
    <h1>Form Data</h1>
    <div className='parent'>
    
     
<table>
    <thead >
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
        </tr>
    </thead>
    <tbody>
      {
        formData.map((i)=>(
<tr>
          <td>{i.Name}</td>
          <td>{i.Age} </td>
          <td>{i.Marks}</td>
        </tr>
        ))
      }
        
            
           
           
        
    </tbody>
  </table>
        
      
      
        

      
  


    </div>
    
    
    </>
    
  )
}

