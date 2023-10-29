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
        <MetaIcon />
        <TwitterIcon />
        <InstagramIcon />
        <YoutubeIcon />
      </div>
    </div>
  );
}
