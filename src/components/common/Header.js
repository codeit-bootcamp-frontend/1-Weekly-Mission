import "./header.css";
import LogoImg from "../../assets/common/img_logo.png";
import axios from "axios";
import { useEffect, useState } from "react";

const Header = () => {
  const [userData, setUserData] = useState({
    email: null,
    name: null,
    id: null,
    profileImageSource: null,
  });
  const handleProfile = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/sample/user`
      );
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
        <img src={LogoImg} width="133" height="24" id="logoImg" alt="logoImg" />
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
