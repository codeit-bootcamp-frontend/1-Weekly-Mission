import "./Header.css";
import { getFolder } from "../api";
// import avatar from "../image/avatar.svg";

const {
  folder: { name, owner },
} = await getFolder();

const Header = () => {
  return (
    <header>
      <div className="header_wrapper">
        <div className="user_info">
          <div className="user_profile">
            <img
              className="owner_img"
              src={owner.profileImageSource}
              alt="프로필 사진"
            />
            <div className="owner_name">{owner.name}</div>
          </div>
          <div className="folder_name">{name}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
