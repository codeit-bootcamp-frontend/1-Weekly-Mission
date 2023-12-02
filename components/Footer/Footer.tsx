import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

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
  new SocialMedia("https://ko-kr.facebook.com", "facebook", "/images/icon/social-icons/icon-facebook.svg"),
  new SocialMedia("https://twitter.com", "twitter", "/images/icon/social-icons/icon-twitter.svg"),
  new SocialMedia("https://www.instagram.com", "instagram", "/images/icon/social-icons/icon-instagram.svg"),
  new SocialMedia("https://www.youtube.com", "youtube", "/images/icon/social-icons/icon-youtube.png"),
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
              <Link key={media.title} href={media.url} target="_blank" rel="noopener noreferrer" title={media.title}>
                <div className={styles.imageContainer}>
                  <Image fill className={styles.image} src={media.src} alt={media.title} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
