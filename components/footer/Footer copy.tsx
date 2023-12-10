import React, { useContext, useEffect, useState } from "react";
import styles from "./Footer.module.css";

import MetaIcon from "@/public/images/meta.svg";
import TwitterIcon from "@/public/images/twitter.svg";
import YoutubeIcon from "@/public/images/twitter.svg";
import InstagramIcon from "@/public/images/instagram.svg";
import useObserver from "@/hooks/useObserver";
import FooterContext from "@/contexts/FooterContext";
export default function Footer() {
  const { ref, isVisible } = useObserver();
  const { isFooterVisible, setIsFooterVisible } = useContext(FooterContext);

  useEffect(() => {
    setIsFooterVisible(isVisible);
  }, [isVisible]);

  return (
    <div className={styles.container} ref={ref}>
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
