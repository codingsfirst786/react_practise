import React, { useState } from 'react'
 import { Container, Nav, Tab, TabPane } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Myassignment() {
const[data, setData] = useState("home")


  return (
    <div className='d-flex'>
        <Tab.Container activeKey={data} >
            <div className="sidebar bg-primary text-white p-3  vh-100 " style={{width:"350px"}}>
                <h3>CodingFirst</h3>
                <Nav variant="pills" className="flex-column">
                    {/* <h5>Theme</h5> */}
                    <Nav.Item>
                        <Nav.Link eventKey="clrs" onClick={()=>setData("clrs")}   >
                         Colors
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="graphy"onClick={()=>setData("graphy")}  className='text-white' >
                            Typography
                        </Nav.Link>
                    </Nav.Item>
                    <h5 className='mt-3'>Components</h5>
                    <Nav.Item>
                        <Nav.Link eventKey="base" onClick={()=> setData("base")}  className='text-white' >
                            Base
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="btn" onClick={()=>setData("btn")} className='text-white'>
                            Button
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="chrt" onClick={()=>setData("chrt")} className='text-white' >
                            Charts
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="edit"  onClick={()=>setData("edit")} className='text-white'>
                            Editors
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="forms" onClick={()=>setData("forms")}  className='text-white'>
                            Form
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="map" onClick={()=>setData("map")} className='text-white' >
                            Google Map
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="icons" onClick={()=>setData("icons")} className='text-white' >
                            Icons
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="notifi" onClick={()=>setData("notifi")} className='text-white' >
                            Notification
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="plugins" onClick={()=>setData("plugins")} className='text-white' >
                            Plugins
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
    </div>
    <Container fluid className='bg-warning p-4 m-auto ' style={{height:"500px"}} >
        <h2 className='mb-4'>Theme</h2>
        <Tab.Content>
            <Tab.Pane eventKey="clrs">
                <h5>Colors</h5>
                <p>Here is the Color Page</p>
                </Tab.Pane>
                <Tab.Pane eventKey="graphy">
                    <h5>Typography</h5>
                    <p>Here is typography page</p>
                </Tab.Pane>
                <Tab.Pane eventKey="base">
                    <h4>Base</h4>
                    <p>Here is the base</p>
                </Tab.Pane>
                <Tab.Pane eventKey="btn">
                   <h4> Button</h4>
                   <p>Here is the button page</p>
                </Tab.Pane>
                <Tab.Pane eventKey="chrt">
                   <h4> Chart</h4>
                   <p>Here is the chart page</p>
                </Tab.Pane>
                <Tab.Pane eventKey="edit">
                    <h4>Editors</h4>
                    <p>here is the eitors page </p>
                </Tab.Pane>
                <Tab.Pane eventKey="forms">
                    <h4>Forms</h4>
                    <p>Here is the form data</p>
                </Tab.Pane>
                <Tab.Pane eventKey="map">
                    <h4>Google Map</h4>
                    <p>Here is google map page</p>
                </Tab.Pane>
                <Tab.Pane eventKey="icons">
                  <h4>Icons</h4> 
                  <p>Here is icons page</p> 
                </Tab.Pane>
                <Tab.Pane eventKey="notifi">
                  <h4>Notification</h4> 
                  <p>here is otification page</p> 
                </Tab.Pane>
                <Tab.Pane eventKey="plugins">
                    <h4>Plugins</h4>
                    <p>Here is a plugin page</p>
                </Tab.Pane>
        </Tab.Content>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxsYVJLf86IJTsmRkTOK-TtWbBMrxd-xierw&s" alt="" style={{height:"60%",width:"90%" }} className='mt-4' />
    </Container>
        </Tab.Container>

    </div>
  )
}
