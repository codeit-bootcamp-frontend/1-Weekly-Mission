import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles["footer__wrapper"]}>
      <div className={styles["container"]}>
        <p className={styles["copyright"]}>©codeit - 2023</p>
        <nav className={styles["menu__wrapper"]}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <nav className={styles["sns__wrapper"]}>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            area-label="페이스북 새 창 열기 링크"
          >
            <img
              src={"/assets/icons/facebook.svg"}
              alt="페이스북 아이콘"
              width="20"
              height="20"
            />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            area-label="트위터 페이지 새 창 열기 링크"
          >
            <img
              src={"/assets/icons/twitter.svg"}
              alt="트위터 아이콘"
              width="20"
              height="20"
            />
          </Link>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            area-label="유튜브 페이지 새 창 열기 링크"
          >
            <img
              src={"/assets/icons/youtube.svg"}
              alt="유튜브 아이콘"
              width="20"
              height="20"
            />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            area-label="인스타그램 페이지 새 창 열기 링크"
          >
            <img
              src={"/assets/icons/instagram.svg"}
              alt="인스타그램 아이콘"
              width="20"
              height="20"
            />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
