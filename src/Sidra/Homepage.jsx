import React from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Routing() {
  return (
    <div>
      
        <h1>Vertical Navbar</h1>
       
        <ul className="nav ">
  <li className="nav-item">
    <Link className="nav-link " aria-current="page" to="/home">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/work">work</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/portfolio">portfolio</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " to="/myteam" >Myteam</Link>
  </li>
</ul>
</div>
  )
}
