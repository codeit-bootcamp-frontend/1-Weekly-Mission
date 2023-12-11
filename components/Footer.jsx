import facebookIcon from "../assets/images/akar-icons_facebook-fill.svg";
import twitterIcon from "../assets/images/akar-icons_twitter-fill.svg";
import youtubeIcon from "../assets/images/akar-icons_youtube-fill.svg";
import instagramIcon from "../assets/images/ant-design_instagram-filled.svg";
import styles from "styles/Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.footerBox}>
      <div className={styles.footerIntro}>
        <div className={styles.footerLinksBox}>
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </div>
        <div className={styles.copyRightBox}>
          <span className={styles.copyRight}>©codeit - 2023</span>
        </div>
      </div>
      <div>
        <div className={styles.footerSns}>
          <a
            className={styles.facebook}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image src={facebookIcon} alt="페이스북 아이콘" />
            </div>
          </a>
          <a
            className={styles.twitter}
            href="https://twitter.com/home?lang=ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image src={twitterIcon} alt="트위터 아이콘" />
            </div>
          </a>
          <a
            className={styles.youtube}
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image src={youtubeIcon} alt="유튜브 아이콘" />
            </div>
          </a>
          <a
            className={styles.instagram}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Image src={instagramIcon} alt="인스타그램 아이콘" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
