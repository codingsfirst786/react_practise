import React from 'react'
import { FaTachometerAlt } from "react-icons/fa"
import { CiDroplet } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";
import { IoRadioButtonOn } from "react-icons/io5"
import { FaChartArea } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { IoNotificationsOffCircle } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si"
import { FaStarHalfAlt } from "react-icons/fa"
export default function Secondassig() {

  
  return (
    <div>
        <div className="sidebar">
            <h2>CodingFirst</h2>
            <div className="dashboard">
            <FaTachometerAlt />
              <span>Dashboard</span>
                <button className='btn btn-primary btn-sm'>NEW</button>
            </div>
            <div className="theme">
                <span>Theme</span>
                <div className="rows mt-2 mb-2">
                 <CiDroplet />
                  <span  data-bs-toggle="tab" href="#home" >Colors</span>
                  </div>
                  <div className="typography mt-3 mb-3">
              <FaPencil />
              <span  data-bs-toggle="tab" href="#home" >Typography</span>
              </div>
              </div>
              <div className="components">
                <span >Components</span>
          <div className="rows mt-4 mb-3">
          <AiFillDatabase />
          <span>Base</span> 
          </div>
          <div className="rows mb-3">
          <IoRadioButtonOn />
          <span id='menu3'>Button</span> 
          </div>
          <div className="rows mb-3">
          <FaChartArea  />
          <span>Chart</span></div> 
         <div className="rows mb-3">
         <FaCreditCard />
         <span>Editors</span></div> 
          <div className="rows mb-3">
          <FaWpforms />
          <span>Forms</span>
            </div> 
         <div className="map mb-3">
         <SiGooglemaps />
         <span>Google Maps</span>
         </div>
         <div className="notify mb-3">
         <IoNotificationsOffCircle />
         <span>Notification</span>
          </div>
          <div className="rows mb-3">
          <FaStarHalfAlt />
         <span>Icons </span> 
         </div> 
          </div>
          
            </div>


            <div class="tab-content d-flex">
    <div id="home" class="container tab-pane active">
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" class="container tab-pane fade">
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" class="container tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="container tab-pane fade">
      <h3>Menu 3</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu4" class="container tab-pane fade">
      <h3>Menu 4</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu5" class="container tab-pane fade">
      <h3>Menu 5</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
  </div>
           
          
        </div>

  )
}
