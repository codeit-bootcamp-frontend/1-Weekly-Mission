import facebook from '../icon-facebook.svg';
import youtube from '../icon-youtube.png';
import instagram from '../icon-instagram.svg';
import twitter from '../icon-twitter.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          <a href="https://www.codeit.kr/" title="codeit">
            ©codeit - 2023
          </a>
        </div>

        <div className="footer__privacy">
          <a href="/privacy.html" title="rivacy Polic">
            Privacy Policy
          </a>
          <a href="/faq.html" title="FAQ">
            FAQ
          </a>
        </div>

        <div className="footer__social_media">
          <a
            href="https://ko-kr.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            title="facebook"
          >
            <img src={facebook} alt="페이스북 아이콘" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            title="twitter"
          >
            <img src={twitter} alt="트위터 아이콘" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="instagram"
          >
            <img src={youtube} alt="유튜브 아이콘" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            title="youtube"
          >
            <img src={instagram} alt="인스타그램 아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
