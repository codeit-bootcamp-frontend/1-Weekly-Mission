import Link from "next/link";
import Image from "next/image";
import { RefObject, useCallback, useRef } from "react";

import facebookImg from "@/assets/images/facebook.svg";
import twitterImg from "@/assets/images/twitter.svg";
import youtubeImg from "@/assets/images/youtube.svg";
import instagramImg from "@/assets/images/instagram.svg";

import { useObserverContext } from "@/contexts/ObserverContext";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import styles from "./Footer.module.css";

const snsLinks = [
  {
    href: "https://www.facebook.com/",
    src: facebookImg,
    alt: "facebook 바로가기",
  },
  {
    href: "https://twitter.com/",
    src: twitterImg,
    alt: "twitter 바로가기",
  },
  {
    href: "https://www.youtube.com/",
    src: youtubeImg,
    alt: "youtube 바로가기",
  },
  {
    href: "https://www.instagram.com/",
    src: instagramImg,
    alt: "instagram 바로가기",
  },
];

const footerOptions = {
  root: null,
  rootMargin: "60px",
  threshold: 1,
};

function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const {
    footer: { setIsFooterVisible },
  } = useObserverContext();

  const footerObserverCallback: IntersectionObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [footerIntersectionObserverEntry] = entries;
      const { isIntersecting } = footerIntersectionObserverEntry;
      setIsFooterVisible(isIntersecting);
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
          <Link className={styles.link} href="/privacy">
            Privacy Policy
          </Link>
          <Link className={styles.link} href="/faq">
            FAQ
          </Link>
        </div>
        <div className={styles.snsLinks}>
          {snsLinks.map(({ href, src, alt }) => {
            return (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={src} alt={alt} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
