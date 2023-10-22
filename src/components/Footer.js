import "./Footer.css";
import facebookIcon from "../img/icons_facebook.svg";
import twitterIcon from "../img/icons_twitter.svg";
import youtubeIcon from "../img/icons_youtube.svg";
import instagramIcon from "../img/icons_instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-company footer-grid">©codeit - 2023</div>
      <div className="footer-info footer-grid">
        <a className="footer-each" href="/">
          Privacy Policy
        </a>
        <a className="footer-each" href="/">
          FAQ
        </a>
      </div>
      <div className="footer-sns footer-grid">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt="facebook" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <img src={twitterIcon} alt="twitter" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <img src={youtubeIcon} alt="youtube" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
