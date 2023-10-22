import React from 'react';
import './Footer.css';
import SocialIcon from './SocialIcon';
import facebookLogo from '../../assets/facebook.png';
import instagramLogo from '../../assets/instagram.png';
import twitterLogo from '../../assets/twitter.png';
import youtubeLogo from '../../assets/youtube.png';

function Footer() {
  const socialLinks = [
    { id: 1, link: 'https://www.facebook.com', imageSource: facebookLogo, altText: 'Facebook' },
    { id: 2, link: 'https://twitter.com', imageSource: twitterLogo, altText: 'Twitter' },
    { id: 3, link: 'https://www.youtube.com', imageSource: youtubeLogo, altText: 'YouTube' },
    { id: 4, link: 'https://www.instagram.com', imageSource: instagramLogo, altText: 'Instagram' },
  ];

  return (
    <footer>
      <div className="frame">
        <div className="footer-container">
          <div className="codeit-2023">@codeit - 2023</div>
          <div className="extra-info">
            <a href="privacy.html"><span>Privacy Policy</span></a>
            <a href="faq.html"><span>FAQ</span></a>
          </div>
          <div className="sns-icons">
            {socialLinks.map((socialLink) => (
              <SocialIcon
                key={socialLink.id}
                link={socialLink.link}
                imageSource={socialLink.imageSource}
                altText={socialLink.altText}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
