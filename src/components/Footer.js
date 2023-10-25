import facebookImage from '../assets/images/icons/facebook.png';
import twitterImage from '../assets/images/icons/twitter.png';
import youtubeImage from '../assets/images/icons/youtube.png';
import instagramImage from '../assets/images/icons/instagram.png';

import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>©codeit - 2023</div>
        <div className={styles.information}>
          <a href='none'>Privacy Policy</a>
          <a href='none'>FAQ</a>
        </div>
        <div className={styles.sns}>
          <a href='https://www.facebook.com/' target='_blank'>
            <img src={facebookImage} alt='페이스북 아이콘' />
          </a>
          <a href='https://twitter.com/' target='_blank'>
            <img src={twitterImage} alt='트위터 아이콘' />
          </a>
          <a href='https://www.youtube.com' target='_blank'>
            <img src={youtubeImage} alt='유튜브 아이콘' />
          </a>
          <a href='https://www.instagram.com/' target='_blank'>
            <img src={instagramImage} alt='인스타그램 아이콘' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
