import Image from "next/image";
import Link from "next/link";
import Facebook from "src/assets/icon/facebook.svg";
import Instagram from "src/assets/icon/instagram.svg";
import Twitter from "src/assets/icon/twitter.svg";
import Youtube from "src/assets/icon/youtube.svg";
import styles from "src/components/Footer/Footer.module.css";

const SOCIAL_LIST = [
  {
    id: 0,
    href: "https://www.facebook.com/",
    imgSrc: Facebook,
    alt: "페이스북 아이콘",
  },
  {
    id: 1,
    href: "https://twitter.com/",
    imgSrc: Twitter,
    alt: "트위터 아이콘",
  },
  {
    id: 2,
    href: "https://www.youtube.com/",
    imgSrc: Youtube,
    alt: "유튜브 아이콘",
  },
  {
    id: 3,
    href: "https://www.instagram.com/",
    imgSrc: Instagram,
    alt: "인스타그램 아이콘",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBackground}>
        <div className={styles.footerContent}>
          <div className={styles.footerName}>©codeit - 2023</div>
          <div className={styles.option}>
            <Link href="pages/privacy.html">Privacy Policy</Link>
            <Link href="pages/faq.html">FAQ</Link>
          </div>
          <div className={styles.social}>
            {SOCIAL_LIST.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                target="noopener noreferrer"
              >
                <Image src={social.imgSrc} alt={social.alt} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
