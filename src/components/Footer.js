import '../styles/footer.css';
import { SNS_LIST } from '../constants/default';

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="sources">©codeit - 2023</div>
        <div className="ppf">
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="link_icon">
          {SNS_LIST.map((sns) => (
            <a key={sns.url} href={sns.url} target="_blank" rel="noopener noreferrer">
              <img alt={sns.alt} src={sns.src} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
