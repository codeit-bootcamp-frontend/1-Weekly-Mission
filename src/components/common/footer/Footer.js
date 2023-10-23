import facebookIcon from "assets/akar-icons_facebook-fill.svg";
import twitterIcon from "assets/akar-icons_twitter-fill.svg";
import youtubeIcon from "assets/akar-icons_youtube-fill.svg";
import instagramIcon from "assets/ant-design_instagram-filled.svg";

import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.wrapper}>
      <div className={style.contact}>
        <div className={style.rights}>©codeit - 2023</div>
        <div className={style.policy}>
          <a className={style.policyText}>Privacy Policy</a>
          <a className={style.policyText}>FAQ</a>
        </div>
        <div className={style.links}>
          <a href="https://www.facebook.com/?locale=ko_KR" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a href="https://twitter.com/?lang=ko" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="twitter" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={youtubeIcon} alt="youtube" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}
