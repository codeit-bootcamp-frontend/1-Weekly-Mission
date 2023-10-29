import { Link } from "react-router-dom";
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
            <Link to="https://www.facebook.com/">
              <img src={facebook} alt="facebook" />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/">
              <img src={twitter} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link to="https://www.youtube.com/">
              <img src={youtube} alt="youtube" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/">
              <img src={instagram} alt="instagram" />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
