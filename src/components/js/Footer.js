import { Link } from "react-router-dom";
import facebookIcon from "../../Assets/facebookIcon.svg";
import twitterIcon from "../../Assets/twitterIcon.svg";
import youtubeIcon from "../../Assets/youtubeIcon.svg";
import instagramIcon from "../../Assets/instagramIcon.svg";
import "../css/Footer.css";

const urlList = {
  facebook: { url: "https://www.facebook.com/", icon: facebookIcon },
  twitter: { url: "https://twitter.com/?lang=ko", icon: twitterIcon },
  youtube: { url: "https://www.youtube.com/", icon: youtubeIcon },
  instagram: { url: "https://www.instagram.com/", icon: instagramIcon },
};

function Icon({ name, onClick }) {
  const { url, icon } = urlList[name];

  const handleClick = () => onClick(url);

  return (
    <img src={icon} className="icon" alt={name} onClick={handleClick}></img>
  );
}

function Footer() {
  const handleIconClick = (url) => {
    window.open(url);
  };

  return (
    <div className="Footer_wrapper">
      <div className="Footer">
        <div className="Footer_copyright">©codeit - 2023</div>
        <div className="Footer_directLink">
          <Link className="link_policy" to="/">
            Privacy Policy
          </Link>
          <Link className="link_faq" to="/">
            FAQ
          </Link>
        </div>
        <div className="Footer_icons">
          <Icon name="facebook" onClick={handleIconClick} />
          <Icon name="twitter" onClick={handleIconClick} />
          <Icon name="youtube" onClick={handleIconClick} />
          <Icon name="instagram" onClick={handleIconClick} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
