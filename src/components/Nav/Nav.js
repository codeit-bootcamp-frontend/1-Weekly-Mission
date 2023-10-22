import Profile from "./Profile";
import LoginButton from "./LoginButton";
import logoImg from '../../assets/logo.png'
import { useState, useEffect } from "react";
import getSample from "../../api";
import '../../style/style.css';
import './Nav.css';


function Nav() {

  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const getSampleUser = async () => {
    const result = await getSample('userk');

    const { email, profileImageSource } = result;

    setEmail(email);
    setProfileImage(profileImageSource);
  }

  useEffect(() => getSampleUser);

  return (
    <nav className="Nav">
      <div className="container">
        <img className="logo" src={logoImg} alt="로고 이미지"></img>

        {email && profileImage ? <Profile email={email} profileImage={profileImage} />
          : <LoginButton />}
      </div>
    </nav>

  )
}

export default Nav;