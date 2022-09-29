import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
// import "./App.css";
import Homepage from "./components/Landing_intro";
import Work from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="App">
      {/* <Router> */}
        <nav id="nav-bar">
          <a>About</a>
          <a>Projects</a>
          <a>Contact</a>
        </nav>
        {/* <Route exact path="/"> */}
          <Homepage />
        {/* </Route> */}
        {/* <Route path="/about"> */}
          <About />
        {/* </Route> */}
        {/* <Route path="/work"> */}
          <Work />
        {/* </Route> */}
        {/* <Route path="/contact"> */}
          <Contact />
        {/* </Route> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
