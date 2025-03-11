import React from "react";

export default function Cards() {
  // const array = [234,25,43,534,63,4]
  // array.forEach((i, j , k)=>{
  //     const a = document.createElement("h1")
  //     a.innerText = i
  //     console.log(a)
  // })

  const data = [
    { body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animidolorum tenetur necessitatibus, in magnam voluptas molestias. Quia voluptatibus eum libero quisquam voluptates, iusto harum dignissimos et illo, quidem pariatur quis!", button:"Click Me"}, 
    { profile: "Hello Coders" , body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animidolorum tenetur necessitatibus, in magnam voluptas molestias. Quia voluptatibus eum libero quisquam voluptates, iusto harum dignissimos et illo, quidem pariatur quis!",},
    { profile: "Code Lab" , body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animidolorum tenetur necessitatibus, in magnam voluptas molestias. Quia voluptatibus eum libero quisquam voluptates, iusto harum dignissimos et illo, quidem pariatur quis!", button:"First Me"},
    {  body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animidolorum tenetur necessitatibus, in magnam voluptas molestias. Quia voluptatibus eum libero quisquam voluptates, iusto harum dignissimos et illo, quidem pariatur quis!", button:" Hello Me"},
    { profile: "Thinker" , body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animidolorum tenetur necessitatibus, in magnam voluptas molestias. Quia voluptatibus eum libero quisquam voluptates, iusto harum dignissimos et illo, quidem pariatur quis!",},
    { body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animidolorum tenetur necessitatibus, in magnam voluptas molestias. Quia voluptatibus eum libero quisquam voluptates, iusto harum dignissimos et illo, quidem pariatur quis!", button:" Hello User"},

];

  return (
    <>
      <div className="main">
       {
        data.map((i)=>(
            <div className="card">
            <div className="header">
              <h1>{i.profile ? i.profile : " Sikandar "}</h1>
            </div>
            <div className="body">
              <p>
               {i.body}
              </p>
            </div>
            <div className="footer">
              <button>{i.button ? i.button : " Clicker "}</button>
            </div>
          </div>
        ))
       }
      </div>
    </>
  );
}