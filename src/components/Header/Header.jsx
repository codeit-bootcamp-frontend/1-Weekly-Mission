import "./Header.css";
import logoImg from "../../assets/image/logo.svg";
import requestData from "../../services/api";
import { useState } from "react";

function Header() {
  const [userData, setUserData] = useState(getUserDataResponse);

  async function getUserDataResponse() {
    // 헤더에 표시되는 유저 이메일, 사진의 response data 받이오기
    const { data: userDataResponse } = await requestData(
      null,
      "users/1",
      "GET"
    );
    setUserData(userDataResponse[0]);
  }

  return (
    <header>
      <div className="header-content">
        <img src={logoImg} alt="logo" />
        <div id="div-myprofile">
          <div>
            <img
              className="userImg"
              src={userData.image_source}
              alt="user profile"
            />
          </div>
          <h4 className="userEmail">{userData.email}</h4>
        </div>
      </div>
    </header>
  );
}

export default Header;
