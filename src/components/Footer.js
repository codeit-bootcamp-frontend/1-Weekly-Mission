import facebookImage from '../assets/images/icons/facebook.png';
import twitterImage from '../assets/images/icons/twitter.png';
import youtubeImage from '../assets/images/icons/youtube.png';
import instagramImage from '../assets/images/icons/instagram.png';
import IconButton from './IconButton.js';

import styles from '../styles/Footer.module.css';

const footerSocialLinks = [
  {
    href: 'https://www.facebook.com/',
    iconUrl: facebookImage,
    alt: '페이스북 아이콘',
    target: '_blank',
  },
  {
    href: 'https://twitter.com/',
    iconUrl: twitterImage,
    alt: '트위터 아이콘',
    target: '_blank',
  },
  {
    href: 'https://www.youtube.com',
    iconUrl: youtubeImage,
    alt: '유튜브 아이콘',
    target: '_blank',
  },
  {
    href: 'https://www.instagram.com/',
    iconUrl: instagramImage,
    alt: '인스타그램 아이콘',
    target: '_blank',
  },
];

function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.copyright}>©codeit - 2023</div>
        <div className={styles.information}>
          <a href='none'>Privacy Policy</a>
          <a href='none'>FAQ</a>
        </div>
        <div className={styles.sns}>
          {footerSocialLinks.map((link) => (
            <IconButton key={link.href} link={link} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
