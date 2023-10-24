import "./Footer.css";
import { SNS_LINK_LIST } from "../../constants/SNS_LINK_LIST.js";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer company">
          <span>ⓒcodit - 2023 </span>
        </div>
        <div className="footer footer_nav">
          <ul>
            <li>
              <a href="/privacy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="/faq.html">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer sns">
          <ul>
            {SNS_LINK_LIST.map((item) => {
              const { id, link, imgSrc, alt } = item;
              return (
                <li key={id}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <img src={imgSrc} alt={alt} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
