import "./footer.css";
import FacebookIcon from "../../assets/common/img_facebookIcon.png";
import InstagramIcon from "../../assets/common/img_instagramIcon.png";
import YoutubeIcon from "../../assets/common/img_youtubeIcon.png";
import TwitterIcon from "../../assets/common/img_twitterIcon.png";

const Footer = () => {
  return (
    <footer>
      <div class="contentContainer">
        <div id="leftItem" class="footerItem">
          ©codeit - 2023
        </div>
        <div id="centerItemContainer">
          <a class="centerItem footerItem" href="./html/privacy.html">
            Privacy Policy
          </a>
          <a class="centerItem footerItem" href="./html/faq.html">
            FAQ
          </a>
        </div>
        <div id="snsItemContainer">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={FacebookIcon} alt="facebookIcon" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={TwitterIcon} alt="twitterIcon" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={YoutubeIcon} alt="youtubeIcon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={InstagramIcon} alt="instagramIcon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
