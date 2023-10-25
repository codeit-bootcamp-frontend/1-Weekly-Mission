import React from 'react';
import Facebook from '../assets/icon/facebook.svg';
import Instagram from '../assets/icon/instagram.svg';
import Twitter from '../assets/icon/twitter.svg';
import Youtube from '../assets/icon/youtube.svg';
import './footer.css';

const SOCIAL_LIST = [
  { id: 0, href: 'https://www.facebook.com/', imgSrc: Facebook, alt: '페이스북 아이콘' },
  { id: 1, href: 'https://twitter.com/', imgSrc: Twitter, alt: '트위터 아이콘' },
  { id: 2, href: 'https://www.youtube.com/', imgSrc: Youtube, alt: '유튜브 아이콘' },
  { id: 3, href: 'https://www.instagram.com/', imgSrc: Instagram, alt: '인스타그램 아이콘' },
];

function Footer() {
  return (
    <footer>
      <div className="footer-background">
        <div className="footer-content">
          <div className="footer-name">©codeit - 2023</div>
          <div className="option">
            <a href="pages/privacy.html">Privacy Policy</a>
            <a href="pages/faq.html">FAQ</a>
          </div>
          <div className="social">
            {SOCIAL_LIST.map((social) => (
              <a key={social.id} href={social.href} target="noopener noreferrer">
                <img src={social.imgSrc} alt={social.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
