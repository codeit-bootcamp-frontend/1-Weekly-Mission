import './Nav.css';
import NavLogo from '../assets/Nav_logo.svg';

const Nav = ( {account} ) => {

  const {email, profileImageSource} = (account.email ===  'stranger') ? {} : account;
  // 로그인 전 후 비교하려고 useState email 초기값 stranger로 지정해서 조건 연산자 썼는데 괜찮은 코드일까요..?

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