import React, { useState } from 'react'
import './style.css'
export default function () {
  const [text,settext] = useState("")
  const [count,setCount] = useState("")
  const wordCount =text.trim()?text.trim().split(/\s+/).length:0;

   const length = text.length

  function UPPERCASE(){
  settext(text.toUpperCase())  
  }
  function lowercase(){
    settext(text.toLowerCase())  
    }

    

  return (
    <div className='website'>
      <div className="Content1">
      <div className="wordcounter" >
        <h1>  {wordCount}words {length}Characters </h1>
      </div> 
      <div className="content">
      <div className="content-item"></div>
      <div className="contentitems"><textarea name="" id="converttext" value={text} placeholder='type here your sentence' onChange={(e) => settext(e.target.value)}></textarea>
      <button onClick={UPPERCASE}>UPPERCASE</button>
      <button onClick={lowercase}>lowercase</button>
      {/* <button>TitleCase</button>
      <button>Sentence case</button> */}
      </div>
        <div className="content-item">
        <h1>{wordCount}Words{length} Characters</h1>  
        </div>

      </div> 
      </div>
     
      <div className="sidebar" >
        {text}
        </div>
        
    </div>
  )
}
