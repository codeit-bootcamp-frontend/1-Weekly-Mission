import "../styles/Footer.css";
import "../styles/reset.css";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";

function FooterSpace() {
  return (
    <footer>
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <a className="footer-link" href="/">
            Privacy Policy
          </a>
          <a className="footer-link" href="/">
            FAQ
          </a>
        </div>
        <div className="sns">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img
              src={facebook}
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter 홈페이지로 연결된 twitter 로고" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={youtube} alt="youtube 홈페이지로 연결된 youtube 로고" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img
              src={instagram}
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSpace;
