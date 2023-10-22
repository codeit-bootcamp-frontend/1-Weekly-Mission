import "./css/footer.css";
import facebookImg from "./images/facebook-icon.svg";
import instagramImg from "./images/instagram-icon.svg";
import youtubeImg from "./images/youtube-icon.svg";
import twitterImg from "./images/twitter-icon.svg";

function Footer() {
  return (
    <div className="footerContainer">
      <p className="footerCopyright">©codeit - 2023</p>
      <div className="footerInformation">
        <p onclick="location.href='privacy.html'">Privacy Policy</p>
        <p onclick="location.href='faq.html'">FAQ</p>
      </div>
      <div className="footerLink">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={facebookImg}
            alt="facebook 홈페이지로 연결된 facebook 로고"
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterImg} alt="twitter 홈페이지로 연결된 twitter 로고" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtubeImg} alt="youtube 홈페이지로 연결된 youtube 로고" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagramImg}
            alt="instagram 홈페이지로 연결된 instagram 로고"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
