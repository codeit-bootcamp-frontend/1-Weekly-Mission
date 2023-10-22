import './Footer.css';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import instagram from '../assets/instagram.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="copyright">©codeit - 2023</div>
        <div className="footer-links">
          <a href="/privacy/index.html">Privacy</a>
          <a href="/faq/index.html">FAQ</a>
        </div>
        <div className="sns">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="페이스북 연결" />
          </a>
          <a href="https://twitter.com/" target="_blank" >
            <img src={twitter} alt="트위터 연결" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} alt="유튜브 연결" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="인스타그램 연결" />
          </a>
        </div>
      </div>
  </div>
  );
}

export default Footer;