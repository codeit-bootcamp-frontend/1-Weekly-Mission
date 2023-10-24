import facebookIcon from "../../assets/icon/facebook_icon.svg";
import twitterIcon from "../../assets/icon/twitter_icon.svg";
import youtubeIcon from "../../assets/icon/youtube_icon.svg";
import instagramIcon from "../../assets/icon/instagram_icon.svg";
import "../../Global.css";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-copyright">@Codeit 2023</div>
          <div className="footer-policy-faq">
            <a href="#">Privacy Policy</a>
            <a href="#">FAQ</a>
          </div>
          <div className="footer-logo-link">
            <a href="https://facebook.com">
              <img src={facebookIcon} alt="페이스북 아이콘 링크" />
            </a>
            <a href="https://twitter.com">
              <img src={twitterIcon} alt="트위터 아이콘 링크" />
            </a>
            <a href="https://youtube.com">
              <img src={youtubeIcon} alt="유투브 아이콘 링크" />
            </a>
            <a href="https://instagram.com">
              <img src={instagramIcon} alt="인스타그램 아이콘 링크" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
