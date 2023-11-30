import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

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

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contact}>
        <div className={styles.rights}>©codeit - 2023</div>
        <div className={styles.policy}>
          <span className={styles.info}>Privacy Policy</span>
          <span className={styles.info}>FAQ</span>
        </div>
        <div className={styles.links}>
          {SNS_INFO.map((sns) => (
            <Link
              href={sns.link}
              target="_blank"
              rel="noreferrer"
              key={sns.name}
            >
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
}
