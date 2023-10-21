import facebookLogo from "../../assets/images/facebook.png";
import twitterLogo from "../../assets/images/twitter.png";
import youtubeLogo from "../../assets/images/youtube.png";
import instagramLogo from "../../assets/images/instagram.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer company">
          <span>ⓒcodit - 2023 </span>
        </div>
        <div className="footer footer_nav">
          <ul>
            <li>
              <a href="/privacy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="/faq.html">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer sns">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookLogo} alt="페이스북 로고" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterLogo} alt="트위터 로고" />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeLogo} alt="유튜브 로고" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramLogo} alt="인스타그램 로고" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
