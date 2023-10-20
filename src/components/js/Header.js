import Nav from "./Nav";
import "../css/Header.css";

function Header({ account, owner, folderName }) {
  const { name, profileImageSource } = owner;
  const ownerName = name;
  const avatarImg = profileImageSource;

  return (
    <div>
      <Nav className="Header_Nav" account={account} />
      <div className="Header_wrapper">
        <div className="Header_container">
          <div className="folder_owner_avatar">
            <img className="avatar_img" src={avatarImg} alt="avatar"></img>
          </div>
          <span className="folder_owner">{`@${ownerName}`}</span>
          <span className="folder_name">{folderName}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
