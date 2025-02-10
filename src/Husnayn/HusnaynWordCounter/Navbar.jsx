import React from 'react'
import './Navbar.css'

export default function Navbar(e) {
  return (
    <>
      <header>
        
          <ul>
            <li>
              <a href="/">{e.home}</a>
            </li>
            <li>
              <a href="/">{e.blog}</a>
            </li>
            <li>
              <a href="/">{e.more}</a>
            </li>
            <li>
              <a href="/">{e.signout}</a>
            </li>
           
          </ul>
        </header>
    
    </>
  )
}
