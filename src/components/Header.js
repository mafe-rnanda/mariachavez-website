import "./Header.scss";

export default function Header(props) {
  const MenuButton = () => {
    if (!props.openMenu) {
      return (
        <div
          className="menu-button"
          open={props.openMenu}
          onClick={() => props.setOpenMenu(!props.openMenu)}
        >
          <div className="button-clicked-open">MENU</div>
        </div>
      );
    } else {
      return (
        <div
          className="close-button"
          open={props.openMenu}
          onClick={() => props.setOpenMenu(!props.openMenu)}
        >
          <div className="button-close">CLOSE</div>
        </div>
      );
    }
  };

  return MenuButton();
}
