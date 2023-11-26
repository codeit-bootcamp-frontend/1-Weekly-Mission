import styles from "./Footer.module.scss";
import { ReactComponent as TwitterIcon } from "src/assets/icons/akar-icons_twitter-fill.svg";
import { ReactComponent as FacebookIcon } from "src/assets/icons/akar-icons_facebook-fill.svg";
import { ReactComponent as YoutubeIcon } from "src/assets/icons/akar-icons_youtube-fill.svg";
import { ReactComponent as InstagramIcon } from "src/assets/icons/akar-icons_instagram-filled.svg";

function Footer() {
  const snsIcons = [
    { name: "facebook", comp: <FacebookIcon /> },
    { name: "twitter", comp: <TwitterIcon /> },
    { name: "youtube", comp: <YoutubeIcon /> },
    { name: "instagram", comp: <InstagramIcon /> },
  ];

  return (
    <footer className={styles["content"]}>
      <div className={`${styles.footer} ${styles.logo}`}>©Codeit - 2023</div>
      <div className={`${styles.footer} ${styles.link}`}>
        <a href="./">Privacy Policy </a>
        <a href="./">FAQ</a>
      </div>
      <div className={`${styles.footer} ${styles.sns}`}>
        {snsIcons.map((icon) => {
          let iconPath = `https://www.${icon.name}.com/`;
          return (
            <a
              href={iconPath}
              target="_blank"
              rel="noreferrer noopener"
              key={icon.name}
            >
              {icon.comp}
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
