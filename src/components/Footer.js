import "../styles/footer.css";
import "../styles/reset.css";
import twitterIcon from "../assets/akar-icons_twitter-fill.svg";
import facebookIcon from "../assets/akar-icons_facebook-fill.svg";
import youtubeIcon from "../assets/akar-icons_youtube-fill.svg";
import instagramIcon from "../assets/akar-icons_instagram-filled.svg";

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="footer logo">©Codeit - 2023</div>
        <div className="footer link">
          <a href="./">Privacy Policy </a>
          <a href="./">FAQ</a>
        </div>
        <div className="footer sns">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebookIcon} alt="페이스북 아이콘" />
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <img src={twitterIcon} alt="트위터 아이콘" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtubeIcon} alt="유튜브 아이콘" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagramIcon} alt="인스타그램 아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
