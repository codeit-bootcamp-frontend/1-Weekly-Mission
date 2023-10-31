import "./Footer.css";
import FacebookLogo from "../../image/facebook.svg";
import TwitterLogo from "../../image/twitter.svg";
import YoutubeLogo from "../../image/youtube.svg";
import InstagramLogo from "../../image/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer_links">
          <a href="privacy.html">Privacy Policy</a>
          <a href="faq.html">FAQ</a>
        </div>
        <div className="footer_sns">
          <a href="https://facebook.com">
            <img src={FacebookLogo} alt="페이스북 로고 이미지" />
          </a>
          <a href="https://twitter.com">
            <img src={TwitterLogo} alt="트위터 로고 이미지" />
          </a>
          <a href="https://youtube.com">
            <img src={YoutubeLogo} alt="유튜브 로고 이미지" />
          </a>
          <a href="https://instagram.com">
            <img src={InstagramLogo} alt="인스타그램 로고 이미지" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
