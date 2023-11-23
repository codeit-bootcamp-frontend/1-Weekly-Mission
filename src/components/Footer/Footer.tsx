import "./Footer.css";
import youtubeIcon from "../../assets/image/icon-youtube.svg";
import twitterIcon from "../../assets/image/icon-twitter.svg";
import facebookIcon from "../../assets/image/icon-facebook.svg";
import instagramIcon from "../../assets/image/icon-instagram.svg";

const COPYRIGHT_TEXT = "©codeit - 2023";
const PRIVACY_POLICY_TEXT = "Privacy Policy";
const FAQ_TEXT = "FAQ";

function Footer() {
  const SnsData = {
    youtube: { icon: youtubeIcon, url: `https://www.youtube.com` },
    twitter: { icon: twitterIcon, url: `https://www.twitter.com` },
    facebook: { icon: facebookIcon, url: `https://www.facebook.com` },
    instagram: { icon: instagramIcon, url: `https://www.ßinstagram.com` },
  } as const;

  function SnsItem({ snsType }: { snsType: string }) {
    const Sns = SnsData[snsType as keyof typeof SnsData];
    return (
      <a href={Sns.url} target="_blank">
        <img className="sns-icons" src={Sns.icon} alt="sns icon" />
      </a>
    );
  }

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
          <SnsItem snsType="facebook" />
          <SnsItem snsType="twitter" />
          <SnsItem snsType="youtube" />
          <SnsItem snsType="instagram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
