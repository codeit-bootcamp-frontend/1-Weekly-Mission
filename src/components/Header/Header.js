import "./Header.js";
import "../../style/style.css";
import "./Header.css";
function Header({ name = "", owner = {} }) {
  return (
    <header className="Header">
      <div className="Header-owner">
        <img
          className="Header-owner-img"
          src={owner?.profileImageSource}
          alt="유저 프로필 사진"
        />
        <p className="Header-owner-name">{`@${owner?.name}`}</p>
      </div>
      <h1 className="Header-name">{name}</h1>
    </header>
  );
}

export default Header;
