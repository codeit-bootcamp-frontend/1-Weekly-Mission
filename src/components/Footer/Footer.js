import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import facebookImg from "../../assets/facebook.svg";
import twitterImg from "../../assets/twitter.svg";
import youtubeImg from "../../assets/youtube.svg";
import instagramImg from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.copyright}>©codeit - 2023</span>
        <div className={styles.links}>
          <Link className={styles.link} to="/privacy">
            Privacy Policy
          </Link>
          <Link className={styles.link} to="/faq">
            FAQ
          </Link>
        </div>
        <div className={styles.snsLinks}>
          <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={facebookImg} alt="facebook 바로가기" />
          </Link>
          <Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitterImg} alt="twitter 바로가기" />
          </Link>
          <Link to="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={youtubeImg} alt="youtube 바로가기" />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagramImg} alt="instagram 바로가기" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
