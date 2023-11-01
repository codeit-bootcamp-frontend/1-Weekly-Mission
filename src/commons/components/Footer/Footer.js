import styles from "./Footer.module.css";
import twitterIcon from "assets/images/akar-icons_twitter-fill.svg";
import facebookIcon from "assets/images/akar-icons_facebook-fill.svg";
import youtubeIcon from "assets/images/akar-icons_youtube-fill.svg";
import instagramIcon from "assets/images/akar-icons_instagram-filled.svg";

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
          <img src={facebookIcon} alt="페이스북 아이콘" />
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={twitterIcon} alt="트위터 아이콘" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={youtubeIcon} alt="유튜브 아이콘" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={instagramIcon} alt="인스타그램 아이콘" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
