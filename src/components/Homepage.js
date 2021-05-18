// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Menu from "./Menu";
import React, { useState } from "react";
import "./Homepage.scss";

export default function Homepage() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div>
      <div className="hello-intro">
        <h1 className={hovered ? "remove-greeting" : "greeting-hello"}>
          HI, HELLO.
          <br></br>
          HOW ARE YOU?
        </h1>
        <h1 className={hovered ? "greeting-hello" : "remove-greeting"}>WORK</h1>
        <h1 className="greeting-name">
          MY NAME IS <br></br> MARIA CHAVEZ.
        </h1>
        <div className="introduction">
          I am a junior full-stack web developer based in Vancouver.
          <br></br>
          <br></br>
          Welcome to my page – click around and make yourself at home.{" "}
          <a
            href="/work"
            className="work-link"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            Here
          </a>{" "}
          are some of my projects and over{" "}
          <a href="/about" className="about-link">
            there
          </a>{" "}
          a bit about myself. <br></br>If you would like to talk and discuss a
          specific project, please{" "}
          <a href="/contact" className="contact-link">
            send me a message
          </a>{" "}
          💌
          <br></br>
          <br></br>
          Enjoy.
        </div>
      </div>
      <div className="projects-summary">
        <div className="projects-heading">
          <h1>
            SOME OF MY LATEST <br></br>PROJECTS
          </h1>
          <a href="/work">Check out more →</a>
        </div>
        <div className="projects-grid">
          <div>
            <img src="https://cdn.lynda.com/static/landing/images/hero/ProjectCoordinator_1200x630-1503426303291.jpg"></img>
            <h2>text</h2>
          </div>
          <div>
            <img src="https://cdn.lynda.com/static/landing/images/hero/ProjectCoordinator_1200x630-1503426303291.jpg"></img>
            <h2>text</h2>
          </div>
          <div>
            <img src="https://cdn.lynda.com/static/landing/images/hero/ProjectCoordinator_1200x630-1503426303291.jpg"></img>
            <h2>text</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
