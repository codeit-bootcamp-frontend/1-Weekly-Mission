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
        <div className="policy">Privacy Policy</div>
        <div className="faq">FAQ</div>
      </div>
      <div className="footer-right">
        <img src={facebook} />
        <img src={twitter} />
        <img src={youtube} />
        <img src={insta} />
      </div>
    </div>
  );
}
