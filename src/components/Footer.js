import facebook from './img/facebook.svg';
import twitter from './img/twitter.svg';
import youtube from './img/youtube.svg';
import insta from './img/insta.svg';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">©codeit - 2023</div>
      <div className="footer-middle">
        <a href="./policy.html" className="policy">
          Privacy Policy
        </a>
        <a href="./faq.html" className="faq">
          FAQ
        </a>
      </div>
      <div className="footer-right">
        <a href="https://www.facebook.com">
          <img src={facebook} />
        </a>
        <a href="https://www.twitter.com">
          <img src={twitter} />
        </a>
        <a href="https://www.youtube.com">
          <img src={youtube} />
        </a>
        <a href="https://www.instagram.com">
          <img src={insta} />
        </a>
      </div>
    </div>
  );
}
