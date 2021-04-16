import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "./Menu.scss";

export default function Menu(props) {
  const history = useHistory();

  // Direct user to Work page when button is clicked
  function handleClickWork() {
    history.push("/work");
    console.log("props:", props);
    props.setOpenMenu(!props.openMenu);
  }

  // Direct user to About page when button is clicked
  function handleClickAbout() {
    history.push("/about");
    console.log("props:", props);
    props.setOpenMenu(!props.openMenu);
  }

  // Direct user to Contact page when button is clicked
  function handleClickContact() {
    history.push("/contact");
    console.log("props:", props);
    props.setOpenMenu(!props.openMenu);
  }
  return (
    <div
      className={
        "menu-section " + (props.openMenu ? "open-menu" : "closed-menu")
      }
      open={props.open}
    >
      <h1 onClick={handleClickWork} open={props.openMenu}>
        WORK
      </h1>
      <h1 onClick={handleClickAbout} open={props.openMenu}>
        ABOUT
      </h1>
      <h1 onClick={handleClickContact} open={props.openMenu}>
        CONTACT
      </h1>
    </div>
  );
}
