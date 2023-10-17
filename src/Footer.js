import React from "react";
import "./Footer.css"; // 필요한 CSS 파일 import
import "./global.css";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import YoutubeIcon from "./YoutubeIcon";
import TwitterIcon from "./TwitterIcon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="section">
          <div className="section_1">
            <p>©codeit - 2023</p>
          </div>
          <div className="section_2">
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </div>
          <div className="section_3">
            <a
              href="https://www.facebook.com"
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
              <InstagramIcon />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
