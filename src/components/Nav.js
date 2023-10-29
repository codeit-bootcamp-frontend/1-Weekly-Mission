// nav 레이아웃 구성
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import './Nav.css';
import Button from "./Button";
import { getUser } from "../api";


function Profile({userData}) {
  console.log(userData);
  // const email = userData.email;
  // const image = userData.image;
  // console.log(email);

  return (
    <div className="profile">
      {/* <img className="profile-img" src={image} alt="프로필"/>
      <span className="profile-email">{email}</span> */}
    </div>
  );
}


function Nav() {

  // 프로필 데이터 가져오기 
  const [userData, setUserData] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLoad = async () => {
    try {
      const response = await getUser();
      const data = response.data[0];
      const email = data.email;
      const image = data.image_source;
      // console.log(email);
      // console.log(image);
      const nextUserData = { email, image };
      console.log(nextUserData);
      setUserData(nextUserData);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="nav-container">
      <Link to="/"><img className="logo-img" src={logoImg} alt="Linkbrary Logo"/></Link>
      {(!isLoading) ? <Profile userData={userData} /> : <Button>로그인</Button>}
    </div>
  );
}

export default Nav;