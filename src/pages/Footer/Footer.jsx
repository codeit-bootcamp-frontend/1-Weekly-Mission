import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import youtube from '../../assets/icons/youtube.svg';
import instagram from '../../assets/icons/instagram.svg';
import './Footer.style.css';

export default function Footer() {
  return (
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
  );
}
