import "./Footer.css";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";
import { Link } from "react-router-dom";

const snsLinks = {
  facebook: "https://www.facebook.com/",
  twitter: "https://www.twitter.com/",
  youtube: "https://www.youtube.com/",
  instagram: "https://www.instagram.com/",
};
const FooterLink = ({ link, text }) => {
  return (
    <Link to={link} className="footer-link">
      {text}
    </Link>
  );
};

const SNSImageLink = ({ src, name }) => {
  return (
    <Link to={snsLinks[name]} target="_blank" rel="noopener noreferrer">
      <img className="sns-icon" src={src} alt={name} height={20} />
    </Link>
  );
};

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-box">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer-links">
          <FooterLink link="/privacy.html" text="Privacy Policy" />
          <FooterLink link="/faq.html" text="FAQ" />
        </div>
        <div className="sns">
          <SNSImageLink src={facebook} name="facebook" />
          <SNSImageLink src={twitter} name="twitter" />
          <SNSImageLink src={youtube} name="youtube" />
          <SNSImageLink src={instagram} name="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
