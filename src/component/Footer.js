import facebook from "../assets/img/icon-facebook-white.svg";
import twitter from "../assets/img/icon-twitter-white.svg";
import youtube from "../assets/img/icon-youtube-white.svg";
import instagram from "../assets/img/icon-instagram-white.svg";
import "../assets/css/Footer.css";

function Footer({ size }) {
  const classname = `footer-${size}`;
  return (
    <div className="footerContainer">
      <footer className={classname}>
        <span className="copyright">©codeit - 2023</span>
        <div className="linkContainer">
          <a className="link" href="/privacy">
            Privacy Policy
          </a>
          <a className="link" href="/faq">
            FAQ
          </a>
        </div>
        <ul className="sns">
          <li>
            <a target="_blank" href="https://www.facebook.com/">
              <img src={facebook} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/">
              <img src={twitter} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/">
              <img src={youtube} />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/">
              <img src={instagram} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
