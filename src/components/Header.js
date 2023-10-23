import logoImg from "../assets/images/logo.png";
import "./Header.css";

// function LoginBtn() {
//   <a className="login-button">로그인</a>;
// }

function Nav({ userInfo }) {
  // 유저데이터가 있으면 유저데이터, 없으면 로그인 버튼
  if (userInfo === null)
    return (
      <div className="nav">
        <a href="/">
          <img className="logo" src={logoImg} alt="logo" />
        </a>
        <a href="/signin.html" className="login-link">
          로그인
        </a>
      </div>
    );

  const { email, profileImageSource } = userInfo;
  return (
    <div className="nav">
      <img className="logo" src={logoImg} alt="로고" />
      <div className="user-info">
        <img
          className="user-profile"
          src={profileImageSource}
          alt="유저 프로필"
        />
        <span className="user-email">{email}</span>
      </div>
    </div>
  );
}

function FolderInfo({ folderInfo }) {
  if (folderInfo === null) return;

  const { name: folderName } = folderInfo;
  const { name, profileImageSource } = folderInfo.owner;

  return (
    <div className="folder-info">
      <img
        className="folder-profile"
        src={profileImageSource}
        alt="유저 폴더 파일"
      />
      <span className="folder-user-name">{name}</span>
      <span className="folder-name">{folderName}</span>
    </div>
  );
}

function Header({ userInfo, folderInfo }) {
  return (
    <header>
      <Nav userInfo={userInfo} />
      <FolderInfo folderInfo={folderInfo} />
    </header>
  );
}

export default Header;
