import FacebookIcon from "../icon/FacebookIcon";
import InstagramIcon from "../icon/InstagramIcon";
import TwitterIcon from "../icon/TwitterIcon";
import YoutubeIcon from "../icon/YoutubeIcon";
function Footer() {
  return (
    <div className="footer">
      <div className="since-codeit">©codeit - 2023</div>
      <div class="extra_sites">
        <a class="extra_sites__link" href="/html/privacy.html">
          Privacy Policy
        </a>
        <a class="extra_sites__link" href="/html/faq.html">
          FAQ
        </a>
      </div>
      <div class="icons">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
