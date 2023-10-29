import "./Footer.css";
import youtubeIcon from "../../assets/image/icon-youtube.svg";
import twitterIcon from "../../assets/image/icon-twitter.svg";
import facebookIcon from "../../assets/image/icon-facebook.svg";
import instagramIcon from "../../assets/image/icon-instagram.svg";

const COPYRIGHT_TEXT = "©codeit - 2023";
const PRIVACY_POLICY_TEXT = "Privacy Policy";
const FAQ_TEXT = "FAQ";

function Footer() {
  const SnsImgUrl = {
    youtube: youtubeIcon,
    twitter: twitterIcon,
    facebook: facebookIcon,
    instagram: instagramIcon,
  };

  class Sns {
    constructor(snsType) {
      this.snsType = snsType;
      this.snsUrl = `https://www.${snsType}.com`;
      this.className = "sns-icons";
      this.snsIconUrl = `../../assets/image/icon-${snsType}.svg`;
    }
    getSnsHtmlEl() {
      return (
        <a href={this.snsUrl} target="_blank">
          <img
            className={this.className}
            src={SnsImgUrl[this.snsType]}
            alt="sns icon"
          />
        </a>
      );
    }
  }
  let facebookIconEl = new Sns("facebook");
  let twitterIconEl = new Sns("twitter");
  let youtubeIconEl = new Sns("youtube");
  let instagramIconEl = new Sns("instagram");
  console.log(facebookIconEl.snsIconUrl);

  return (
    <footer>
      <div id="footer-container">
        <h5 id="copyright">{COPYRIGHT_TEXT}</h5>
        <div id="label-container">
          <a className="footer-label" id="label_privacy-policy">
            {PRIVACY_POLICY_TEXT}
          </a>
          <a className="footer-label" id="label_faq">
            {FAQ_TEXT}
          </a>
        </div>
        <div id="sns-container">
          {facebookIconEl.getSnsHtmlEl()}
          {twitterIconEl.getSnsHtmlEl()}
          {youtubeIconEl.getSnsHtmlEl()}
          {instagramIconEl.getSnsHtmlEl()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
