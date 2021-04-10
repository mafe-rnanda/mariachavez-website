// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Menu from "./Menu";
import "./Homepage.scss";

export default function Homepage() {
  return (
    <div>
      <div className="hello-intro">
        <h1 className="greeting-hello">
          HI. HELLO.
          <br></br>
          HOW ARE YOU?
        </h1>
        <h1 className="greeting-name">
          MY NAME IS <br></br> MARIA CHAVEZ.
        </h1>
        <div className="introduction">
          I am a junior full-stack web developer based in Vancouver.
          <br></br>
          <br></br>
          Welcome to my page – click around and make yourself at home. If you
          would like to talk, get to know each other and/or discuss a specific
          project, please send me a message
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
          <a>Check out more</a>
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
