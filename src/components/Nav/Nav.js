import '../../globalStyles.css'
import './Nav.css';
import { useEffect, useState } from 'react';
import NavLogo from './Nav_logo.svg';
import { getUsers } from '../api';

const Nav = () => {

  const [email, setEmail] = useState();
  const [profileImg, setProfileImg] = useState();

  const handleLoad = async () => {
    const { email, profileImageSource } = await getUsers();
    setEmail(email);
    setProfileImg(profileImageSource);
  }

  useEffect(() => {
    handleLoad({email}); // 
  }, [email]);

  return (
    <nav> 
      <img src={NavLogo} id="logo" href="index" alt="홈페이지 로고: 클릭 시 메인화면으로 이동" />
      {email && <div className="account">  {/*프로필 누르면 자기 계정으로 들어갈 것 같아서 일단 a*/}
        <img className="profile-img" src={profileImg} alt="프로필 이미지"/>
         <p className="email">{email}</p>
      </div>}
      {!email && <button className='login-button'>로그인</button>}
    </nav>
  )
}

export default Nav;