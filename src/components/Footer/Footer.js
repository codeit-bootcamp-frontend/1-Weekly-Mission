import facebookIcon from './Footer-facebook-icon.svg';
import twitterIcon from './Footer-twitter-icon.svg';
import youtubeIcon from './Footer-youtube-icon.svg';
import instagramIcon from './Footer-instagram-icon.svg';
import '../../globalStyles.css'
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p id="footer-codeit">©codeit - 2023</p>
      <div className="info">
        <a href='./privacy'>Privacy Policy</a>
        <a href='./faq'>FAQ</a>
      </div>
      <div className="website">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
          <img src={facebookIcon} alt="페이스북 아이콘: 누르면 해당 홈페이지로 이동" />
        </a>
        <a target="_blank" href="https://twitter.com/" rel="noreferrer noopener">
          <img src={twitterIcon} alt="트위터 아이콘: 누르면 해당 홈페이지로 이동" />
        </a>
        <a target="_blank" href="https://www.youtube.com/" rel="noreferrer noopener">
          <img src={youtubeIcon} alt="유튜브 아이콘: 누르면 해당 홈페이지로 이동" />
        </a>
        <a target="_blank" href="https://www.instagram.com/" rel="noreferrer noopener">
          <img src={instagramIcon} alt="인스타그램 아이콘: 누르면 해당 홈페이지로 이동" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;