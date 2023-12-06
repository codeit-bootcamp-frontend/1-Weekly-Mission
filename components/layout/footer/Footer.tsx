import React from "react";
import styles from "./footer.module.css";
import LinkIcon from "./components/LinkIcons";
import LINK_ICONS from "./constant/linkIcons";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.items}>
          <span className={styles.copyrights}>&copy;codeit - 2023</span>
          <div className={styles.privacyPolicy}>
            <a className={styles.policy} href="/privacy">
              <p>Privacy Policy</p>
            </a>
            <a className={styles.faq} href="/faq">
              <p>FAQ</p>
            </a>
          </div>
          <div className={styles.icons}>
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

export default Footer;
