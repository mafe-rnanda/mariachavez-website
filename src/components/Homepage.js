// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Menu from "./Menu";
import React, { useState } from "react";
import "./Homepage.scss";

export default function Homepage() {
  const [workHovered, setWorkHovered] = useState(false);
  const toggleWorkHover = () => setWorkHovered(!workHovered);

  const [aboutHovered, setAboutHovered] = useState(false);
  const toggleAboutHover = () => setAboutHovered(!aboutHovered);

  const [contactHovered, setContactHovered] = useState(false);
  const toggleContactHover = () => setContactHovered(!contactHovered);

  const hovered = () => {
    if (
      workHovered === true ||
      aboutHovered === true ||
      contactHovered === true
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <div className="hello-intro">
        <div className="top-hover">
          <h1 className={hovered() ? "greeting-hello" : "remove-greeting"}>
            HI, HELLO.
            <br></br>
            HOW ARE YOU?
          </h1>
          <h1 className={workHovered ? "greeting-work" : "remove-greeting"}>
            WORK
          </h1>
          <h1 className={aboutHovered ? "greeting-about" : "remove-greeting"}>
            ABOUT
          </h1>
          <h1
            className={contactHovered ? "greeting-contact" : "remove-greeting"}
          >
            CONTACT
          </h1>
        </div>
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
            onMouseEnter={toggleWorkHover}
            onMouseLeave={toggleWorkHover}
          >
            Here
          </a>{" "}
          are some of my projects and over{" "}
          <a
            href="/about"
            className="about-link"
            onMouseEnter={toggleAboutHover}
            onMouseLeave={toggleAboutHover}
          >
            here
          </a>{" "}
          a bit about myself. <br></br>If you would like to talk and discuss a
          specific project, please{" "}
          <a
            href="/contact"
            className="contact-link"
            onMouseEnter={toggleContactHover}
            onMouseLeave={toggleContactHover}
          >
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
