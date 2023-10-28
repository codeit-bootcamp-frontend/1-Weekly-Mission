import "../pages/SharedPage/sharedPage.css";

const COPYRIGHT_TEXT = "©codeit - 2023";
const PRIVACY_POLICY_TEXT = "Privacy Policy";
const FAQ_TEXT = "FAQ";

function Footer() {
  class Sns {
    constructor(snsType) {
      this.snsType = snsType;
      this.snsUrl = `https://www.${snsType}.com`;
      this.className = "sns-icons";
      this.snsIconUrl = `/src/assets/image/icon-${snsType}.svg`;
    }
    getSnsHtmlEl() {
      return (
        <a href={JSON.stringify(this.snsUrl)} target="_blank">
          <img
            class={JSON.stringify(this.className)}
            src={JSON.stringify(this.snsIconUrl)}
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
          {JSON.stringify(facebookIconEl)}
          {JSON.stringify(twitterIconEl)}
          {JSON.stringify(youtubeIconEl)}
          {JSON.stringify(instagramIconEl)}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
