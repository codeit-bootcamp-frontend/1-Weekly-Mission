import facebookImg from "./image/facebook.svg";
import twitterImg from "./image/twitter.svg";
import youtubeImg from "./image/youtube.svg";
import instagramImg from "./image/instagram.svg";

const url = {
  facebook: "https://www.facebook.com/",
  twitter: "https://twitter.com/",
  youtube: "https://www.youtube.com/",
  instagram: "https://www.instagram.com/",
};

export function Footer() {
  return (
    <div className="footer-box">
      <span className="footer-logo">codeit - 2023</span>
      <div className="footer-links">
        <a className="footer-link" href="privacy.html">
          Privacy Policy
        </a>
        <a className="footer-link" href="faq.html">
          FAQ
        </a>
      </div>
      <div className="sns">
        <a href={url.facebook}>
          <img src={facebookImg} alt="facebook 홈페이지로 연결" />
        </a>
        <a href={url.twitter}>
          <img src={twitterImg} alt="twitter 홈페이지로 연결" />
        </a>
        <a href={url.youtube}>
          <img src={youtubeImg} alt="youtube 홈페이지로 연결" />
        </a>
        <a href={url.instagram}>
          <img src={instagramImg} alt="instagram 홈페이지로 연결" />
        </a>
      </div>
    </div>
  );
}
