// nav 레이아웃 구성
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import './Nav.css';
import Button from "./Button";
import { getUser } from "../api";



function Nav() {

  // 프로필 데이터 가져오기 
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({}); 

  const handleLogin = async () => {
    let result;
    try {
      result = await getUser();
      if (!result) return;
      const userData = result.data[0];
      if (userData?.id) {
        setIsLogin(true);
        setUserInfo(userData);
      }
    } catch(error) {
      console.log(error);
      return;
    }
  }
  useEffect(()=>{
    handleLogin();
  }, []);

  const email = userInfo?.email;
  const profileImg = userInfo?.image_source; 

  return (
    <div className="nav-container">
      <Link to="/"><img className="logo-img" src={logoImg} alt="Linkbrary Logo"/></Link>
      {!isLogin && (<Button>로그인</Button>)}
      {isLogin && (
        <div>
          <img className="profile-img" src={profileImg} alt="프로필 이미지" />
          <span className="profile-email">{email}</span>
        </div>
      )}
    </div>
  );
}

export default Nav;