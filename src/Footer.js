import "./css/footer.css";
import { snsData } from "./utils/snsUtil";

function Footer() {
  return (
    <footer>
      <p className="footerCopyright">©codeit - 2023</p>
      <div className="footerInformation">
        <p onclick="location.href='privacy.html'">Privacy Policy</p>
        <p onclick="location.href='faq.html'">FAQ</p>
      </div>
      <div className="footerLink">
        {snsData.map((item) => (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img src={item.image} alt={item.name} />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
