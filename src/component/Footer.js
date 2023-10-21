import css from "../css/Footer.module.css";
import FacebookIcon from "../icon/FacebookIcon";
import InstagramIcon from "../icon/InstagramIcon";
import TwitterIcon from "../icon/TwitterIcon";
import YoutubeIcon from "../icon/YoutubeIcon";
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
          <FacebookIcon />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
