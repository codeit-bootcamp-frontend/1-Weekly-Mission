import { SnsCollection } from "components";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerBox">
        <span className="copyright">@codeit - 2023</span>
        <div className="footerLinks">
          <a className="footerLink" href="/">
            Privacy Policy
          </a>
          <a className="footerLink" href="/">
            FAQ
          </a>
        </div>
        <SnsCollection className="sns" />
      </div>
    </footer>
  );
};

export default Footer;
