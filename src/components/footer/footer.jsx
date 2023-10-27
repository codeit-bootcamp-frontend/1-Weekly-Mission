import "./footer.css";
import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import instagramIcon from "../../assets/icons/instagram.svg";

export default function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="copyright">©codeit - 2023</p>
        <nav className="footer__menu-wrapper">
          <a href="/pages/privacy.html">Privacy Policy</a>
          <a href="/pages/faq.html">FAQ</a>
        </nav>
        <nav className="footer__sns-wrapper">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebookIcon}
              alt="페이스북 아이콘"
              width="20"
              height="20"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="트위터 아이콘" width="20" height="20" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="유튜브 아이콘" width="20" height="20" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              alt="인스타그램 아이콘"
              width="20"
              height="20"
            />
          </a>
        </nav>
      </div>
    </footer>
  );
}
