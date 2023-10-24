import React from "react";
import "./Footer.css";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import YoutubeIcon from "./YoutubeIcon";
import TwitterIcon from "./TwitterIcon";
import SocialLink from "./SocialLink";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com", icon: <FacebookIcon /> },
    { href: "https://twitter.com/", icon: <InstagramIcon /> },
    { href: "https://youtube.com/", icon: <YoutubeIcon /> },
    { href: "https://instagram.com/", icon: <TwitterIcon /> },
  ];

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
            {socialLinks.map((link, index) => (
              <SocialLink key={index} href={link.href} icon={link.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
