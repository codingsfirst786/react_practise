import React from "react";

const Navbar = () => {
  const navbar = [
    { home: "Home page" },
    { contact: "Contact Page" },
    { team: "Team Page" },
    { about: "About Page" },
    { service: "Service Page" },
  ];

  return (
    <div>
      <header>
        <nav>
          <h1>Logo</h1>
          <ul >
            {navbar.map((item, index) => {
              const text = Object.values(item)[0]; 

              return (
                <li
                  key={index}
                className={index == 2 ? "black" : "red"}>
                  
                  <a href="#">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
