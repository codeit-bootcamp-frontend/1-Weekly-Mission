import "./css/header.css";
import logoImg from "./images/logo.svg";
import { useState, useEffect } from "react";
import { getLoginData } from "./api";

function Header() {
  const [hasData, setHasData] = useState(false);
  const [loginData, setLoginData] = useState();

  const handleLoad = async () => {
    let result;
    try {
      result = await getLoginData();
      setHasData(true);
      setLoginData(result);
      console.log(result.email);
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
              src={loginData.profileImageSource}
              id="profileImg"
              alt="Profile Img"
            />
            <p>{loginData.email}</p>
          </div>
        )}
        {!hasData && <button id="headerButton">로그인</button>}
      </div>
    </div>
  );
}

export default Header;
