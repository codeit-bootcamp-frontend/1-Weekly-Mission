import React from "react";

import styles from "./Footer.module.css";

import { ReactComponent as InstagramIcon } from "../../assets/images/instagram.svg";
import { ReactComponent as MetaIcon } from "../../assets/images/meta.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/images/youtube.svg";

export default function Footer() {
  return (
    <div className={styles.container}>
      <span className={styles.codeit}>©codeit - 2023</span>
      <div className={styles.policy}>
        <span>Privacy Policy</span>
        <span>FAQ</span>
      </div>
      <div className={styles.icons}>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <MetaIcon />
        </a>
        <a href="https://twitter.com/" target="_blank" rel=" noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <YoutubeIcon />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}
