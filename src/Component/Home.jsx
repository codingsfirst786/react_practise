import React from "react";
import "../Component/Style.css";
export default function Home(i) {
//   function hello(a + b) {
//     return console.log(a + b);
//   }
//   hello(2,6);

let name = "asad"

  return (
    <>
      <div className="main">
      {/* {console.log(12<6 ? "OK" : "ERROR")} */}
        <h1>Hello {name === "ali" ? name : "Not Found"}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          quidem facilis. Sequi quibusdam quo dolores inventore quam nihil
          quaerat eligendi modi nemo eos neque repellendus architecto voluptas
          magnam, consequatur delectus recusandae, beatae blanditiis at
          consequuntur id! Ea aperiam doloremque quo.
        </p>
      </div>
    </>
  );
}
