import css from "../css/Footer.module.css";
import youtubeImg from "../assets/img/youtube.svg";
import instagramImg from "../assets/img/instagram.svg";
import twitterImg from "../assets/img/twitter.svg";
import facebookImg from "../assets/img/facebook.svg";

function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.since}>©codeit - 2023</div>
      <div className={css.extraSites}>
        <a href="/html/privacy.html">Privacy Policy</a>
        <a href="/html/faq.html">FAQ</a>
      </div>
      <div className={css.icons}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookImg} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterImg} />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtubeImg} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramImg} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
