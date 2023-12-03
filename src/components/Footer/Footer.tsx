import styles from "./Footer.module.css";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import YoutubeIcon from "../../assets/icons/YoutubeIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import SocialLink from "./SocialLink";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com", icon: <FacebookIcon /> },
    { href: "https://twitter.com/", icon: <InstagramIcon /> },
    { href: "https://youtube.com/", icon: <YoutubeIcon /> },
    { href: "https://instagram.com/", icon: <TwitterIcon /> },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <div className={styles.section1}>
            <p>©codeit - 2023</p>
          </div>
          <div className={styles.section2}>
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </div>
          <div className={styles.section3}>
            {socialLinks.map((link, index) => (
              <SocialLink key={index} href={link.href} icon={link.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
