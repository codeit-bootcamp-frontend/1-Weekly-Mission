import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-box">
          <span className="copyright">©codeit - 2023</span>
          <div className="footer-links">
            <Link className="footer-link" href="privacy.html">
              Privacy Policy
            </Link>
            <Link className="footer-link" href="faq.html">
              FAQ
            </Link>
          </div>
          <div className="sns">
            <Link
              style={{ position: "relative", width: "2rem" }}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/facebook.svg"
                alt="facebook 홈페이지로 연결된 facebook 로고"
                fill
              />
            </Link>
            <Link
              style={{
                position: "relative",
                width: "2rem",
              }}
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/twitter.svg"
                alt="twitter 홈페이지로 연결된 twitter 로고"
                fill
              />
            </Link>
            <Link
              style={{ position: "relative", width: "2rem" }}
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/youtube.svg"
                alt="youtube 홈페이지로 연결된 youtube 로고"
                fill
              />
            </Link>
            <Link
              style={{ position: "relative", width: "2rem" }}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/instagram.svg"
                alt="instagram 홈페이지로 연결된 instagram 로고"
                fill
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
