import logoImg from "../assets/images/logo.png";
import "./Header.css";
import { getUserFolder, getUserData } from "../utils/api.js";
import { useState, useEffect } from "react";

function Header(/*{ userInfo, folderInfo }*/) {
  const [userInfo, setUserInfo] = useState(null);
  const [folderInfo, setFolderInfo] = useState(null);

  async function handleUserData() {
    const folderData = await getUserFolder();
    setFolderInfo(folderData);
    const userData = await getUserData();
    setUserInfo(userData);
  }

  useEffect(() => {
    handleUserData();
  }, []);

  return (
    <header>
      <Nav userInfo={userInfo} />
      <FolderInfo folderInfo={folderInfo} />
    </header>
  );
}

function FolderInfo({ folderInfo }) {
  if (!folderInfo) return;

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

function Nav({ userInfo }) {
  // 유저데이터가 있으면 유저데이터, 없으면 로그인 버튼
  if (!userInfo) return;

  const { email, profileImageSource } = userInfo;
  return (
    <div className="nav">
      <a href="/">
        <img className="logo" src={logoImg} alt="로고" />
      </a>
      {userInfo ? (
        <div className="user-info">
          <img
            className="user-profile"
            src={profileImageSource}
            alt="유저 프로필"
          />
          <span className="user-email">{email}</span>
        </div>
      ) : (
        <a href="/signin.html" className="login-link">
          로그인
        </a>
      )}
    </div>
  );
}

export default Header;
