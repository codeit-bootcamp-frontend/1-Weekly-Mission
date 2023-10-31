import React from 'react';
import {
  snsIconF,
  snsIconI,
  snsIconT,
  snsIconY,
} from '../../constants/globalImages';
import './FooterStyle.css';

function SnsLink({ url, imgSrc, name }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img src={imgSrc} alt={`Linkbrary의 ${name} 바로가기`} />
    </a>
  );
}

function SnsIcons() {
  return (
    <div className="sns-icons">
      <SnsLink
        url="https://www.facebook.com/"
        imgSrc={snsIconF}
        alt="facebook"
      />
      <SnsLink
        url="https://twitter.com/?lang=ko"
        imgSrc={snsIconT}
        alt="twiter"
      />
      <SnsLink url="https://www.youtube.com/" imgSrc={snsIconY} alt="youtube" />
      <SnsLink
        url="https://www.instagram.com/"
        imgSrc={snsIconI}
        alt="instagram"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <span>©codeit - 2023</span>
        <div className="footer-menu">
          <a href="/pages/privacy/privacy.html">Privacy Policy</a>
          <a href="/pages/faq/faq.html">FAQ</a>
        </div>
        <SnsIcons />
      </div>
    </footer>
  );
}

export default Footer;
