import 'styles/header.css';
import Profile from './Profile.js';
import LoginBtn from './LoginBtn.js';
import useGetUser from 'hooks/useGetUser';
import useGetSampleUser from 'hooks/useGetSampleUser';
import logoImg from 'assets/images/logo.svg';

function Header({ page = '' }) {
  const sampleuser = useGetSampleUser();
  const user = useGetUser(1);
  const userData = page === 'shared' ? sampleuser : user;
  const fixed = page === 'shared' ? 'fixed' : null;

  return (
    <header className={fixed}>
      <div className="header_container">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img className="linkbrary_logo" src={logoImg} alt="Linkbrary 메인 페이지 바로가기" />
        </a>
        {userData ? <Profile user={userData} /> : <LoginBtn />}
      </div>
    </header>
  );
}

export default Header;
