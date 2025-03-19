import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Boot from "./Practises/Boot";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import Secondassig from "./Sidra/Secondassig";
// import Component2 from "./Sidra/Component2";
import Carosel from "./Sidra/Carosel";
import Myassignment from "./Sidra/Myassignment";
import Homepage from "./Sidra/Homepage"

import Work from "./Sidra/Work";
import Home from "./Sidra/Home";
import Myteam from "./Sidra/Myteam";
import Portfolio from "./Sidra/Portfolio";
// import Myteam from "./Sidra/Myteam";


// import Cards from "./Mapping/Cards";
// import Navbar from "./Sidra/Navbar";
// import States from "./Sidra/States";
// import Input from "./Sidra/Table";
// import About from "./Component/About";
// import Contact from "./Component/Contact";
// import Home from "./Component/Home";
// import Portfolio from "./Component/Portfolio";
function App() {
  
  return (
    <>
    {/* <Myteam/> */}
    {/* <Boot/> */}
     {/* <Secondassig/> */}
     {/* <Component2/>  */}
     {/* <Myassignment/> */}
    {/* <Carosel/> */}
      {/* <div className="main">
        <Home />
        <About />
      </div>
      <div className="main">
        <Contact/>
        <Portfolio />
      </div> */}
      {/* <Cards/> */}
      {/* <Input/> */}
      {/* <Navbar/>
      <States/> */}

     <Router>
      <Homepage/>
      <Routes>
      {/* <Route path="/" element ={<Homepage/> } /> */}
      <Route path="/home" element={<Home/>} />
      <Route path="/work" element={<Work/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/myteam" element={<Myteam/>} />
      </Routes>
     </Router>
      
    </>
  );
}

export default App;
