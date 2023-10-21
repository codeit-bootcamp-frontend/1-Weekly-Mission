import logo from '../assets/logo.svg';
import avatar from '../assets/Avatar.png';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import youtube from '../assets/icons/youtube.svg';
import instagram from '../assets/icons/instagram.svg';
import './Shared.style.css';

export default function Home() {
  return (
    <>
      <div className='header'>
        <img src={logo} alt='logo' />
        <button className='header-login-btn'>로그인</button>
      </div>
      <div className='info'>
        <img src={avatar} alt='codeit' className='codeit' />
        <p className='userName'>@코드잇</p>
        <h2 className='folderName'>⭐️즐겨찾기</h2>
      </div>
      <div className='footer'>
        <p>@Codeit - 2023</p>
        <div>
          <a>Privacy Policy</a>
          <a>FAQ</a>
        </div>
        <div className='icons'>
          <a>
            <img src={facebook} alt='facebook' />
          </a>
          <a>
            <img src={twitter} alt='twitter' />
          </a>
          <a>
            <img src={youtube} alt='youtube' />
          </a>
          <a>
            <img src={instagram} alt='instagram' />
          </a>
        </div>
      </div>
    </>
  );
}
