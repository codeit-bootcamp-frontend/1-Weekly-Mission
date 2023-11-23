import "./Header.css";
import logoImg from "../../assets/image/logo.svg";
import requestData from "../../services/api";
import { useEffect, useState } from "react";

function Header() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function getUserDataResponse() {
      // 헤더에 표시되는 유저 이메일, 사진의 response data 받이오기
      const { data: userDataResponse } = await requestData(
        null,
        "users/1",
        "GET"
      );
      setUserData(userDataResponse[0]);
      console.log(userDataResponse);
    }
    getUserDataResponse();
  }, []);

  return (
    <header>
      <div className="header-content">
        <img className="header-content__logoImg" src={logoImg} alt="logo" />
        <div className="header-content__userDiv">
          <img
            className="header-content__userDiv__userImg"
            src={userData.image_source}
            alt="user profile"
          />
          <h4 className="header-content__userDiv__emailTxt">
            {userData.email}
          </h4>
        </div>
      </div>
    </header>
  );
}

export default Header;
