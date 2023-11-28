import { RefObject, useCallback } from "react";
import { Link } from "react-router-dom";

import { useObserverContext } from "../../contexts/ObserverContext";

import facebookImg from "../../assets/images/facebook.svg";
import twitterImg from "../../assets/images/twitter.svg";
import youtubeImg from "../../assets/images/youtube.svg";
import instagramImg from "../../assets/images/instagram.svg";

import styles from "./Footer.module.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const snsLinks = [
  {
    to: "https://www.facebook.com/",
    src: facebookImg,
    alt: "facebook 바로가기",
  },
  {
    to: "https://twitter.com/",
    src: twitterImg,
    alt: "twitter 바로가기",
  },
  {
    to: "https://www.youtube.com/",
    src: youtubeImg,
    alt: "youtube 바로가기",
  },
  {
    to: "https://www.instagram.com/",
    src: instagramImg,
    alt: "instagram 바로가기",
  },
];

const footerOptions = {
  root: null,
  rootMargin: "60px",
  threshold: 1,
};

const Footer = () => {
  const {
    footerRef: { footerRef, setIsFooterVisible },
  } = useObserverContext();

  const footerObserverCallback: IntersectionObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [footerIntersectionObserverEntry] = entries;
      const { isIntersecting } = footerIntersectionObserverEntry;

      setIsFooterVisible(isIntersecting);
      console.log("Footer", isIntersecting);
    },
    [setIsFooterVisible]
  );

  useIntersectionObserver({
    ref: footerRef,
    callback: footerObserverCallback,
    options: footerOptions,
  });

  return (
    <div className={styles.footer} ref={footerRef as RefObject<HTMLDivElement>}>
      <div className={styles.container}>
        <span className={styles.copyright}>©codeit - 2023</span>
        <div className={styles.links}>
          <Link className={styles.link} to="/privacy">
            Privacy Policy
          </Link>
          <Link className={styles.link} to="/faq">
            FAQ
          </Link>
        </div>
        <div className={styles.snsLinks}>
          {snsLinks.map(({ to, src, alt }) => {
            return (
              <Link key={to} to={to} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={alt} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
