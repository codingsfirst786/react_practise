import React, { useState } from "react";

export default function Use() {
  const [Count, setCount] = useState(0);
  //     const [Code, setCode] = useState("Codings")
  // //   let   code = "codings"
  // function Change(){
  //     setCode("First")
  // }
  // const [Para, setPara] = useState(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro numquam iusto accusantium excepturi, reprehenderit itaque magnam accusamus voluptatum. Facere suscipit tempora nam molestiae, culpa animi architecto exercitationem dolor dignissimos numquam.")
  // function chnagePara(){
  //     setPara("Pragraph removed")
  // }
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={()=>{setCount(Count + 1)}}>Increment</button>
      <button onClick={()=>{setCount(Count - 1)}}>Decrement</button>
      {/* <h1>Hello {Code}</h1>
      <button onClick={Change}>Click to Change</button> */}
      {/* <p>{Para}</p>
      <button onClick={()=>{setPara("Paragrphh removed successfully")}}>Change Para</button> */}
    </div>
  );
}
