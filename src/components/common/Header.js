import "./header.css";
import LogoImg from "../../assets/common/img_logo.png";
import { useCallback, useEffect, useState } from "react";
import useAsync from "../../hooks/useAsync";
import { getUser } from "../../api/api";

const Header = () => {
  const [userData, setUserData] = useState({
    email: null,
    name: null,
    id: null,
    profileImageSource: null,
  });
  const [isLoading, error, getUserAsync] = useAsync(getUser);

  const handleProfile = useCallback(async () => {
    const result = await getUserAsync();
    if (!result) return;

    setUserData(result);
  }, [getUserAsync]);

  useEffect(() => {
    handleProfile();
  }, [handleProfile]);

  if (isLoading) {
    return <div>화면을 불러오는 중입니다.</div>;
  }

  if (error) {
    return <div>문제가 발생했습니다.</div>;
  }

  return (
    <header>
      <nav className="contentContainer">
        <img src={LogoImg} id="logoImg" alt="logoImg" />
        {userData.email ? (
          <div className="profileContainer">
            <img src={userData.profileImageSource} alt="profileImg" />
            <div className="profileEmail">{userData.email}</div>
          </div>
        ) : (
          <a href="./html/login.html">
            <button className="defaultBtn" id="loginBtn">
              로그인
            </button>
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
