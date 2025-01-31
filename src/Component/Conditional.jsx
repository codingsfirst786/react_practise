import React from "react";
import "./Style.css";

export default function Conditional() {
  let choice = parseInt(prompt("Sleect by choice \n 1. Red \n 2. Black"));
  console.log(choice);
  return (
    <div>
      {choice === 1 ? (
        <div className="red">
          <h1 >Hello Cards</h1>
          <p style={{backgroundColor:"green", padding:"10px 20px"}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, non
            delectus ratione totam sit officiis odit, fugit tempora, maxime
            facere nostrum eveniet nihil molestiae ullam ipsam dicta?
            Perferendis, perspiciatis minus?
          </p>
        </div>
      ) : (
        ""
      )}

     {choice ===2 ?  <div className="black">
        <h1>Hello Cards</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, non
          delectus ratione totam sit officiis odit, fugit tempora, maxime facere
          nostrum eveniet nihil molestiae ullam ipsam dicta? Perferendis,
          perspiciatis minus?
        </p>
      </div> : ""}
    </div>
  );
}
