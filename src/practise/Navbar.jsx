import React from "react";
import "./Navbar.css";
import logo from '../Media/img1.jpeg'

export default function Navbar(e) {
  return (
    <>
      <div>
        <header>
          <ul>
            <li>
              <a href="/">{e.home}</a>
            </li>
            <li>
              <a href="/">{e.about}</a>
            </li>
            <li>
              <a href="/">{e.contact ? e.contact : " Error" }</a>
            </li>
            <li>
              <a href="/">{e.team}</a>
            </li>
            <li>
              <a href="/">Hello</a>
            </li>
          </ul>
        </header>
        <img src={logo} alt="" style={{height:"300px"}}/>
      </div>
    </>
  );
}
