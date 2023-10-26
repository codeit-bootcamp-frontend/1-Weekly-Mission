import "./Footer.css";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import twitter from "../assets/svg/twitter.svg";
import youtube from "../assets/svg/youtube.svg";

const SnsLogo = [
  { href: "https://www.facebook.com/", src: facebook, alt: "facebook" },
  { href: "https://twitter.com/", src: twitter, alt: "twitter" },
  { href: "https://www.youtube.com/", src: youtube, alt: "youtube" },
  { href: "https://www.instagram.com/", src: instagram, alt: "instagram" },
];

const FooterSns = ({ logo }) => {
  return (
    <a href={logo.href} target="_blank" rel="noopener noreferrer">
      <img src={logo.src} alt={logo.alt} />
    </a>
  );
};

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
        <div className="footer-sns">
          {SnsLogo.map((sns) => (
            <FooterSns key={sns.alt} logo={sns} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
