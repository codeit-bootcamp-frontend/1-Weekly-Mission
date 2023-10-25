import "../css/header.css";
import logoImg from "../images/logo.svg";
import { useState, useEffect } from "react";
import { getLoginData } from "../api";

function Header() {
  const [hasData, setHasData] = useState(false);
  const [userData, setUserData] = useState();

  const handleLoad = async () => {
    let result;
    try {
      result = await getLoginData();
      setHasData(true);
      setUserData(result);
    } catch (error) {
      setHasData(false);
      return;
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <div className="headerContainer">
        <img id="headerLogo" src={logoImg} alt="Linkbrary logo" />
        {hasData && (
          <div className="headerProfile">
            <img
              src={userData.profileImageSource}
              id="profileImg"
              alt="Profile Img"
            />
            <p>{userData.email}</p>
          </div>
        )}
        {!hasData && <button id="headerButton">로그인</button>}
      </div>
    </div>
  );
}

export default Header;
