import facebookIcon from "../assets/images/akar-icons_facebook-fill.svg";
import twitterIcon from "../assets/images/akar-icons_twitter-fill.svg";
import youtubeIcon from "../assets/images/akar-icons_youtube-fill.svg";
import instagramIcon from "../assets/images/ant-design_instagram-filled.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-intro">
        <div className="footer-links-box">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </div>
        <div className="copy-right-box">
          <span className="copy-right">©codeit - 2023</span>
        </div>
      </div>
      <div>
        <div className="footer-sns">
          <a
            className="facebook"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="페이스북 아이콘" />
          </a>
          <a
            className="twitter"
            href="https://twitter.com/home?lang=ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="트위터 아이콘" />
          </a>
          <a
            className="youtube"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="유튜브 아이콘" />
          </a>
          <a
            className="instagram"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="인스타그램 아이콘" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
