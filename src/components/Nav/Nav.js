import logoImg from "../../assets/images/logo.png";
import defaultProfileImg from "../../assets/images/defaultProfileImg.png";
import "./Nav.css";
import { getLoginInfo } from "../../utils/api";
import { useState } from "react";

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const handleLogin = async () => {
    let result;
    try {
      result = await getLoginInfo();
      if (result?.id) {
        //Id 값이 있을 경우 로그인 된것으로 간주
        setIsLogin(true);
        setUserInfo(result);
      }
    } catch (error) {
      console.error(error);
      return;
    }
    // const { email, name, profileImageSource } = result;
  };

  return (
    <>
      <nav>
        <span className="logo">
          <a href="/">
            <img src={logoImg} alt="로고" />
          </a>
        </span>
        {!isLogin && (
          <button className="btn login" onClick={handleLogin}>
            로그인
          </button>
        )}
        {isLogin && (
          <div className="userProfile">
            <img
              className="userProfileImg"
              src={defaultProfileImg}
              alt="프로필 사진"
            ></img>
            <span className="userProfileEmail">{userInfo.email}</span>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
