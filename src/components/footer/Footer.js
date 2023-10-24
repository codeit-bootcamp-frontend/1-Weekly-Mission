import React from 'react';
import './footer.css';
import LinkIcon from './components/LinkIcons';
import LINK_ICONS from './constant/linkIcons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-items">
          <span className="footer-copyrights">&copy;codeit - 2023</span>
          <div className="footer-privacy-policy">
            <a className="footer-policy" href="/privacy">
              <p>Privacy Policy</p>
            </a>
            <a className="footer-faq" href="/faq">
              <p>FAQ</p>
            </a>
          </div>
          <div className="footer-icons">
            {LINK_ICONS.map((item) => (
              <div key={item.id}>
                <LinkIcon image={item.image} alt={item.alt} url={item.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
