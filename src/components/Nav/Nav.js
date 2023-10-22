import '../../globalStyles.css'
import './Nav.css';
import NavLogo from './Nav_logo.svg';

const Nav = ( {account} ) => {

  const {email, profileImageSource} = account;

  return (
    <nav> 
      <div id='nav-contents'>
        <a href="/">
          <img src={NavLogo} id="logo" alt="홈페이지 로고: 클릭 시 메인화면으로 이동" />
        </a>
        {email && <div className="account">  {/*프로필 누르면 자기 계정으로 들어갈 것 같아서 일단 a*/}
          <img className="profile-img" src={profileImageSource} alt="프로필 이미지"/>
          <p className="email">{email}</p>
        </div>}
        {!email && <button className='login-button'>로그인</button>}
      </div>
    </nav>
  )
}

export default Nav;