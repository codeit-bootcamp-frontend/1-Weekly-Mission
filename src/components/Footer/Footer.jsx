import { Link } from "react-router-dom";

import IMAGES from "../../assets/images.js";
import styles from "./Footer.module.css";

const snsLinks = {
  facebook: "https://www.facebook.com/",
  twitter: "https://www.twitter.com/",
  youtube: "https://www.youtube.com/",
  instagram: "https://www.instagram.com/",
};
const FooterLink = ({ link, text }) => {
  return (
    <Link to={link} className={styles.footerLink}>
      {text}
    </Link>
  );
};

const SNSImageLink = ({ src, name }) => {
  return (
    <Link to={snsLinks[name]} target="_blank" rel="noopener noreferrer">
      <img className={styles.snsIcon} src={src} alt={name} height={20} />
    </Link>
  );
};

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.footerBox}>
        <span className={styles.copyright}>©codeit - 2023</span>
        <div className={styles.footerLinks}>
          <FooterLink link="/privacy.html" text="Privacy Policy" />
          <FooterLink link="/faq.html" text="FAQ" />
        </div>
        <div className={styles.sns}>
          <SNSImageLink src={IMAGES.facebook} name="facebook" />
          <SNSImageLink src={IMAGES.twitter} name="twitter" />
          <SNSImageLink src={IMAGES.youtube} name="youtube" />
          <SNSImageLink src={IMAGES.instagram} name="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
