import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span className="copyright">©codeit - 2023</span>
        <div className="footer__links">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </div>
        <div className="sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/images/facebook.svg").default}
              alt="facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/images/twitter.svg").default}
              alt="twitter 로고"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/images/youtube.svg").default}
              alt="youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/images/instagram.svg").default}
              alt="instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
