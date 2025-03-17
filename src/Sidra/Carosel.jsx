
import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab, TabPane } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Tab.Container activeKey={activeTab}>
      <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
        <h4>Dashboard</h4>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="home" onClick={() => setActiveTab("home")} className="text-white">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="analytics" onClick={() => setActiveTab("analytics")} className="text-white">
              Analytics
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="settings" onClick={() => setActiveTab("settings")} className="text-white">
              Settings
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="services" onClick={() => setActiveTab("Services")} className="text-white">
              Services
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="portfolio" onClick={() => setActiveTab("Portfolio")} className="text-white">
              Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="typography" onClick={() => setActiveTab("Typography")} className="text-white">
              Typography
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* Main Content */}
      <Container fluid className="p-4 bg-danger">
        <h2 className="mb-4">Dashboard</h2>
        {/* <Tab.Container activeKey={activeTab}> */}
          <Tab.Content>
            <Tab.Pane eventKey="home">
              <h4>Home</h4>
              <p>Welcome to your dashboard!</p>
            </Tab.Pane>
            <Tab.Pane eventKey="analytics">
              <h4>Analytics</h4>
              <p>View analytics data here.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="settings">
              <h4>Settings</h4>
              <p>Adjust your preferences here.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="services">
            <h4>Services</h4>
            <p>Web Development,Graphic Deisigning,Game Development</p>
            </Tab.Pane>
            <Tab.Pane eventKey="portfolio" >
              <h4>Portfolio</h4>
             <p>Our working experiences</p>
            </Tab.Pane>
            <Tab.Pane eventKey="typography" >
              <h4>Typography</h4>
              <p>Here is typography</p>
            </Tab.Pane>
          </Tab.Content>
        
      </Container>
      </Tab.Container>
    </div>
  );
};

export default Dashboard;
