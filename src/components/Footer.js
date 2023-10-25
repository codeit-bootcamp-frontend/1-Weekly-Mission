import styles from "../styles/Footer.module.css";
import facebookImg from "../assets/facebook.svg";
import twitterImg from "../assets/twitter.svg";
import youtubeImg from "../assets/youtube.svg";
import instagramImg from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        <span className={styles.copyright}>©codeit - 2023</span>
        <div className={styles.links}>
          <a className={styles.link} href="privacy.html">
            Privacy Policy
          </a>
          <a className={styles.link} href="faq.html">
            FAQ
          </a>
        </div>
        <div className={styles.sns_links}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookImg} alt="facebook 바로가기" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterImg} alt="twitter 바로가기" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={youtubeImg} alt="youtube 바로가기" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramImg} alt="instagram 바로가기" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
