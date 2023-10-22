import "./header.css";
import LogoImg from "../../assets/common/img_logo.png";
import { useEffect, useState } from "react";
import { ApiMapper } from "../../api/apiMapper";
import request from "../../api";

const Header = () => {
  const [userData, setUserData] = useState({
    email: null,
    name: null,
    id: null,
    profileImageSource: null,
  });
  const handleProfile = async () => {
    try {
      const response = await request.get(`${ApiMapper.sample.get.GET_USER}`);
      if (response.status === 200) {
        setUserData(response.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleProfile();
  }, []);

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
