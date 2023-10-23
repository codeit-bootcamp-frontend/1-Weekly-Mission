import Nav from "./Nav";
import "../css/Header.css";
import "../css/Nav.css";

function Header({ account}) {
  return (
    <header>
      <Nav account={account} />
    </header>
  );
}

export default Header;
