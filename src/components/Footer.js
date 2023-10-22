import "./Footer.css";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import twitter from "../assets/svg/twitter.svg";
import youtube from "../assets/svg/youtube.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="copyright">©codeit - 2023</div>
        <div className="explain">
          <a className="policy" href="./privacy.html">
            privacy policy
          </a>
          <a className="faq" href="./faq.html">
            FAQ
          </a>
        </div>
        <div className="sns-logo">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="facebook logo" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} alt="twitter logo" />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtube} alt="youtube logo" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} alt="instagram logo" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
