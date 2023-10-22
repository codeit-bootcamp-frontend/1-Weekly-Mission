import './Header.css';
import logoImg from '../assets/logo.svg'
import Folder from "./Folder";

function Profile({ account }) {
  const { email, profileImageSource } = account;

  if (!email) {
    return <a>로그인</a>;
  } else {
    <div>
      <img src={profileImageSource} />
      <div>{email}</div>
    </div>
  }
}

function Header({ account }) {
  return (
    <div className="Header">
      <div className="gnb">
        <div className="logo">
          <a href="/"><img src={logoImg} alt="홈으로 이동"/></a>
        </div>
        <Profile account={account}/>
      </div>
      <Folder />
    </div>
  );
}

export default Header;