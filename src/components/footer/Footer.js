import React from 'react';
import './footer.css';
import facebookIcon from '../../assets/landing/facebookIcon.svg';
import instagramIcon from '../../assets/landing/instagramIcon.svg';
import twitterIcon from '../../assets/landing/twitterIcon.svg';
import youtubeIcon from '../../assets/landing/youtubeIcon.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-items">
          <span className="footer-copyrights">&copy;codeit - 2023</span>
          <div className="footer-privacy-policy">
            <a className="footer-policy" href="/privacy">
              <p>Privacy Policy</p>
            </a>
            <a className="footer-faq" href="/faq">
              <p>FAQ</p>
            </a>
          </div>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookIcon} alt="facebookIcon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="twitterIcon" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={youtubeIcon} alt="youtubeIcon" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="instagramIcon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
