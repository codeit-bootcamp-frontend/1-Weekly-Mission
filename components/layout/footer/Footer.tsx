import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.css";
import { forwardRef } from "react";

const SNS_INFO = [
  {
    name: "facebook",
    link: "https://www.facebook.com/?locale=ko_KR",
  },
  {
    name: "twitter",
    link: "https://twitter.com/?lang=ko",
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/",
  },
];

/** ref 타입에러 템플릿 코드 확인하여 해결
 * 아래 주석은 기존 props와 ref를 동시에 받았을 때 적용했던 타입
 */
// const Footer = forwardRef(({ isIntersecting }: FooterProps, ref: ForwardedRef<HTMLDivElement>) => {...}

const Footer = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.contact}>
        <div className={styles.rights}>©codeit - 2023</div>
        <div className={styles.policy}>
          <span className={styles.info}>Privacy Policy</span>
          <span className={styles.info}>FAQ</span>
        </div>
        <div className={styles.links}>
          {SNS_INFO.map((sns) => (
            <Link href={sns.link} target="_blank" rel="noreferrer" key={sns.name}>
              <Image
                src={`/sns/icons_${sns.name}-fill.svg`}
                alt={sns.name}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Footer;
