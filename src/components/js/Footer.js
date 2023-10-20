import { Link } from "react-router-dom";
import facebookIcon from "../../Assets/facebookIcon.svg";
import twitterIcon from "../../Assets/twitterIcon.svg";
import youtubeIcon from "../../Assets/youtubeIcon.svg";
import instagramIcon from "../../Assets/instagramIcon.svg";
import "../css/Footer.css";

const urlList = {
  facebook: "https://www.facebook.com/",
  twitter: "https://twitter.com/?lang=ko",
  youtube: "https://www.youtube.com/",
  instagram: "https://www.instagram.com/",
};

function Footer() {
  const handleIconClick = (e) => {
    const nextUrl = e.target.name;
    window.open(urlList[nextUrl]);
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
          <img
            className="icon"
            src={facebookIcon}
            alt={facebookIcon}
            name="facebook"
            onClick={handleIconClick}
          ></img>
          <img
            className="icon"
            src={twitterIcon}
            alt={twitterIcon}
            name="twitter"
            onClick={handleIconClick}
          ></img>
          <img
            className="icon"
            src={youtubeIcon}
            alt={youtubeIcon}
            name="youtube"
            onClick={handleIconClick}
          ></img>
          <img
            className="icon"
            src={instagramIcon}
            alt={instagramIcon}
            name="instagram"
            onClick={handleIconClick}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
