import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";
import "./Menu.scss";

export default function Menu(props) {
  console.log("Menu props: ", props);
  return (
    <div
      className={
        "menu-section " + (props.openMenu ? "open-menu" : "closed-menu")
      }
      open={props.open}
    >
      <h1>WORK</h1>
      <h1>ABOUT</h1>
      <h1>CONTACT</h1>
    </div>
  );
}
