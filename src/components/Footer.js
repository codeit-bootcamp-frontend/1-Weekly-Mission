import './Footer.css';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Instagram from '../assets/instagram.svg';
import Youtube from '../assets/youtube.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
          <div className="copyright">
            ©codeit - 2023
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">FAQ</a>
          </div>
          <div className="footer-sns">
            <a href="https://www.facebook.com/" target="_blank">
              <img src={Facebook} />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <img src={Twitter} />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src={Youtube} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src={Instagram} />
            </a>
          </div>
      </div>
    </div>
  );
}

export default Footer;