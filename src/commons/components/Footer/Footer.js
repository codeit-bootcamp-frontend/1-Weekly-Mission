import styles from "./Footer.module.css";
import { ReactComponent as TwitterIcon } from "assets/images/akar-icons_twitter-fill.svg";
import { ReactComponent as FacebookIcon } from "assets/images/akar-icons_facebook-fill.svg";
import { ReactComponent as YoutubeIcon } from "assets/images/akar-icons_youtube-fill.svg";
import { ReactComponent as InstagramIcon } from "assets/images/akar-icons_instagram-filled.svg";

function Footer() {
  return (
    <footer className={styles["content"]}>
      <div className={`${styles.footer} ${styles.logo}`}>©Codeit - 2023</div>
      <div className={`${styles.footer} ${styles.link}`}>
        <a href="./">Privacy Policy </a>
        <a href="./">FAQ</a>
      </div>
      <div className={`${styles.footer} ${styles.sns}`}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <YoutubeIcon />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
