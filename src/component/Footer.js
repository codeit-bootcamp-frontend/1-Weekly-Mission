import SNS from "./SNS.js";
import socialMedia from "./SocialMedia.js";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <span className="footer-logo">codeit - 2023</span>
        <div className="footer-links">
          <a className="footer-link" href="privacy.html">
            Privacy Policy
          </a>
          <a className="footer-link" href="faq.html">
            FAQ
          </a>
        </div>
        <div className="sns">
          {socialMedia.map((sns, index) => (
            <SNS key={index} alt={sns.name} url={sns.url} icon={sns.icon} />
          ))}
        </div>
      </div>
    </div>

  );
}
