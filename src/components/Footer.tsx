import { Link } from "react-router-dom";
import styles from "styles/modules/footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <span className={styles.logo}>©codeit - 2023</span>
        <div className={styles.linkToPage}>
          <Link to="/privacy.html" className={styles.link}>
            Privacy Policy
          </Link>
          <Link to="/faq.html" className={styles.link}>
            FAQ
          </Link>
        </div>
        <div className={styles.socialIcon}>
          <Link to="https://www.facebook.com/?locale=ko_KR">
            <img src="assets/images/facebook.svg" alt="facebookLogo" />
          </Link>
          <Link to="https://www.twitter.com/">
            <img src="assets/images/twitter.svg" alt="twitterLogo" />
          </Link>
          <Link to="https://www.youtube.com/">
            <img src="assets/images/youtube.svg" alt="youtubeLogo" />
          </Link>
          <Link to="https://www.instagram.com/">
            <img src="assets/images/instagram.svg" alt="instagramLogo" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
