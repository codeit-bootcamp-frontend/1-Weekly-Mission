import facebookImage from "../assets/png/facebook.png";
import twitterImage from "../assets/png/twitter.png";
import youtubeImage from "../assets/png/youtube.png";
import instagramImage from "../assets/png/instagram.png";

import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__copyright">©codeit - 2023</div>
        <div className="footer__information">
          <a href="none">Privacy Policy</a>
          <a href="none">FAQ</a>
        </div>
        <div className="footer__sns">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebookImage} alt="페이스북 아이콘" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterImage} alt="트위터 아이콘" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src={youtubeImage} alt="유튜브 아이콘" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagramImage} alt="인스타그램 아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
