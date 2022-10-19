import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
// import "./App.css";
import Homepage from "./components/Landing_intro";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return (
    //to-top button
    <div className="App">
        <nav id="nav-bar">
          <a href="about-section">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact-section">Contact</a>
        </nav>
          <Homepage />
          <About />
          <Projects />
          <Contact />
      <a className="go-to-top" onClick={scrollToTop} 
     style={{display: visible ? 'flex' : 'none'}}><svg baseProfile="tiny" height="5em" version="1.2" viewBox="0 0 24 24" width="5em" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Layer_1"><path d="M13,5.586l-4.707,4.707c-0.391,0.391-0.391,1.023,0,1.414s1.023,0.391,1.414,0L12,9.414V17c0,0.552,0.447,1,1,1   s1-0.448,1-1V9.414l2.293,2.293C16.488,11.902,16.744,12,17,12s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L13,5.586z   "/></g></svg>Go to top</a>
    </div>
  );
}

export default App;
