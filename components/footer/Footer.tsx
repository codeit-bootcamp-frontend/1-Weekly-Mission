import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Footer.module.css";

import MetaIcon from "@/public/images/meta.svg";
import TwitterIcon from "@/public/images/twitter.svg";
import YoutubeIcon from "@/public/images/twitter.svg";
import InstagramIcon from "@/public/images/instagram.svg";
import ObserverContext from "../../contexts/ObserverContext";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const {
    footerRef: { footerRef, isFooterVisible, setIsFooterVisible },
  } = useContext(ObserverContext);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  // const observer = useMemo(() => {
  //   return new IntersectionObserver((entries) => {
  //     const [IntersectionObserverEntry] = entries;
  //     if (IntersectionObserverEntry.isIntersecting) {
  //       setIsFooterVisible(true);
  //     } else {
  //       setIsFooterVisible(false);
  //     }
  //   }, options);
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [IntersectionObserverEntry] = entries;
      if (IntersectionObserverEntry.isIntersecting) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    }, options);
    if (footerRef?.current) {
      observer.observe(footerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.container} ref={footerRef}>
      <span className={styles.codeit}>©codeit - 2023</span>
      <div className={styles.policy}>
        <span>Privacy Policy</span>
        <span>FAQ</span>
      </div>
      <div className={styles.icons}>
        {/* <Link></Link> */}
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
