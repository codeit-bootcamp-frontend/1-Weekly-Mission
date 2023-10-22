import facebook from '../../images/icon-facebook.svg';
import youtube from '../../images/icon-youtube.png';
import instagram from '../../images/icon-instagram.svg';
import twitter from '../../images/icon-twitter.svg';
import styles from './Footer.module.css';

class SocialMedia {
  constructor(url, title, src) {
    this.url = url;
    this.title = title;
    this.src = src;
  }
}

const socialMediaArray = [
  new SocialMedia('https://ko-kr.facebook.com', 'facebook', facebook),
  new SocialMedia('https://twitter.com', 'twitter', twitter),
  new SocialMedia('https://www.instagram.com', 'instagram', instagram),
  new SocialMedia('https://www.youtube.com', 'youtube', youtube),
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
              <a
                key={media.title}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                title={media.title}
              >
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
