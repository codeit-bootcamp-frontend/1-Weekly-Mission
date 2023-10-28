// nav 레이아웃 구성
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";
import { getUser } from '../api';
import './Nav.css';


// function Profile({ userData }) {
//   const a = userData.data;
//   console.log(a);
//   const b = a["id"];
//   console.log(b);
  
//   console.log(data);
  
//   const { data } = userData;
//   console.log(data);


//   return (
//     <div className="profile">
//       <img className="profile-img" src={profileImageSource} alt="프로필"/>
//       <span className="profile-email">{email}</span>
//     </div>
//   );
// }

function Nav() {
  const [userData, setUserData] = useState({}); 

  const handleLoad = async () => {
    const nextUserData = await getUser();
    setUserData(nextUserData);
    console.log(userData);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="nav-container">
      <Link to="/"><img className="logo-img" src={logoImg} alt="Linkbrary Logo"/></Link>
      <Profile userData={userData} />
    </div>
  );
}

export default Nav;