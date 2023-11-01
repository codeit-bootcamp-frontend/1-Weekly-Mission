import "../css/footer.css";
import { snsData } from "../utils/snsData";

function Footer() {
  return (
    <footer>
      <p className="footerCopyright">©codeit - 2023</p>
      <div className="footerInformation">
        <p onClick="location.href='privacy.html'">Privacy Policy</p>
        <p onClick="location.href='faq.html'">FAQ</p>
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
