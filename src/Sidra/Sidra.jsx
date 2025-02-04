import React, { useState } from "react";

export default function Sidra() {
  const [data, setdata] = useState(true);
  const [print, setprint] = useState(false)

  function Getdata(e) {
    setdata(e.target.value);
    setprint(false)
  }
  return (
    <div>
      {print ? <h1>{data}</h1> : "no data"}
      <input type="text" name="" id="" onChange={Getdata} />
      <button onClick={()=>{setprint(true)}}>GetData</button>
    </div>
  );
}
