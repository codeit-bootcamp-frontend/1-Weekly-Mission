import "./Header.style.css";
import "../../styles/reset.css";

function Header({ folderUserProfile, folderName, folderUserName }) {
  if (!folderUserName) {
    return (
      <header>
        <div>
          로그인을 해주세요.
          {/* 프사 */}
          {/* 이름 */}
          {/* 즐겨찾기 */}
        </div>
      </header>
    );
  }
  return (
    <header>
      <div className="user-section">
        {/* 프사 */}
        <div>
          <img
            src={folderUserProfile}
            alt="profile"
            className="folder-profile-img"
          />
        </div>
        {/* 이름 */}
        <div className="folder-user-name">{folderUserName}</div>
        {/* 즐겨찾기 */}
        <div className="folder-name">{folderName}</div>
      </div>
    </header>
  );
}

export default Header;
