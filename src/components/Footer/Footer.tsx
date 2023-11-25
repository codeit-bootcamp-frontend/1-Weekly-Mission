import facebookIcon from "../../assets/images/icon-facebook.svg";
import youtubeIcon from "../../assets/images/icon-youtube.png";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import styles from "./Footer.module.css";

class SocialMedia {
  url: string;
  title: string;
  src: string;

  constructor(url: string, title: string, src: string) {
    this.url = url;
    this.title = title;
    this.src = src;
  }
}

const socialMediaArray = [
  new SocialMedia("https://ko-kr.facebook.com", "facebook", facebookIcon),
  new SocialMedia("https://twitter.com", "twitter", twitterIcon),
  new SocialMedia("https://www.instagram.com", "instagram", instagramIcon),
  new SocialMedia("https://www.youtube.com", "youtube", youtubeIcon),
];

function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <a href="https://www.codeit.kr/" title="codeit">
            ©codeit - 2023
          </a>
        </div>

        <div className={styles.privacy}>
          <a href="/privacy" title="Privacy Policy">
            Privacy Policy
          </a>
          <a href="/faq" title="FAQ">
            FAQ
          </a>
        </div>

        <div className={styles.socialMedia}>
          {socialMediaArray.map((media) => {
            return (
              <a key={media.title} href={media.url} target="_blank" rel="noopener noreferrer" title={media.title}>
                <img src={media.src} alt={media.title} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
