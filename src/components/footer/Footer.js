import React from 'react';
import {
  snsIconF,
  snsIconI,
  snsIconT,
  snsIconY,
} from '../../constants/globalImages';
import './FooterStyle.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <span>©codeit - 2023</span>
        <div className="footer-menu">
          <a href="/pages/privacy/privacy.html">Privacy Policy</a>
          <a href="/pages/faq/faq.html">FAQ</a>
        </div>
        <div className="sns-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={snsIconF} alt="Linkbrary의 facebook 바로가기" />
          </a>
          <a
            href="https://twitter.com/?lang=ko"
            target="_blank"
            rel="noreferrer"
          >
            <img src={snsIconT} alt="Linkbrary의 twiter 바로가기" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={snsIconY} alt="Linkbrary의 youtube 바로가기" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={snsIconI} alt="Linkbrary의 instagram 바로가기" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
