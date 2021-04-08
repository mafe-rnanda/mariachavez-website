// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.scss";

export default function Header(props) {
  console.log("Header props: ", props);
  return (
    <div>
      {!props.openMenu && (
        <div
          className="menu-button"
          open={props.openMenu}
          onClick={() => props.setOpenMenu(!props.openMenu)}
        >
          <div className="button-clicked-open">MENU</div>
        </div>
      )}
      {props.openMenu && (
        <div
          className={"close-button"}
          open={props.openMenu}
          onClick={() => props.setOpenMenu(!props.openMenu)}
        >
          <div className="button-close">CLOSE</div>
        </div>
      )}
    </div>
  );
}
