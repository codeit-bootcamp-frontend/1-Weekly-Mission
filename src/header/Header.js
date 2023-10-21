import "./Header.css";
import avatar from "../image/avatar.svg";

const Header = () => {
  return (
    <header>
      <div className="header_wrapper">
        <div className="user_info">
          <div className="user_profile">
            <img className="user_img" src={avatar} />
            <div className="user_name">@코드잇</div>
          </div>
          <div className="folder_name">⭐️ 즐겨찾기</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
