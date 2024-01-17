/*Footer 컴포넌트:
  페이지의 맨 아래에 들어가는 공통 컴포넌트
*/

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

function Footer() {
  const snsIcons = [
    {
      name: "facebook",
      comp: (
        <Image
          src="/icons/akar-icons_facebook-fill.svg"
          width={20}
          height={20}
          alt="facebook icon"
        />
      ),
    },
    {
      name: "twitter",
      comp: (
        <Image
          src="/icons/akar-icons_twitter-fill.svg"
          width={20}
          height={20}
          alt="facebook icon"
        />
      ),
    },
    {
      name: "youtube",
      comp: (
        <Image
          src="/icons/akar-icons_youtube-fill.svg"
          width={20}
          height={20}
          alt="facebook icon"
        />
      ),
    },
    {
      name: "instagram",
      comp: (
        <Image
          src="/icons/akar-icons_instagram-fill.svg"
          width={20}
          height={20}
          alt="facebook icon"
        />
      ),
    },
  ];

  return (
    <footer className={`${styles["content"]} ${styles["footer"]}`}>
      <div className={`${styles.footer} ${styles.logo}`}>©Codeit - 2023</div>
      <div className={`${styles.footer} ${styles.link}`}>
        <Link href="./">Privacy Policy </Link>
        <Link href="./">FAQ</Link>
      </div>
      <div className={`${styles.footer} ${styles.sns}`}>
        {snsIcons.map((icon) => {
          let iconPath = `https://www.${icon.name}.com/`;
          return (
            <Link
              href={iconPath}
              target="_blank"
              rel="noreferrer noopener"
              key={icon.name}
            >
              {icon.comp}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
