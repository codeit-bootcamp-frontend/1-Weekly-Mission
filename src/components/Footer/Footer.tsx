import style from "./Footer.module.css";
import youtubeIcon from "/public/icon/icon-youtube.svg";
import twitterIcon from "/public/icon/icon-twitter.svg";
import facebookIcon from "/public/icon/icon-facebook.svg";
import instagramIcon from "/public/icon/icon-instagram.svg";
import Image from "next/image";

const COPYRIGHT_TEXT = "©codeit - 2023";
const PRIVACY_POLICY_TEXT = "Privacy Policy";
const FAQ_TEXT = "FAQ";

function Footer() {
  const SnsData = {
    youtube: { icon: youtubeIcon, url: `https://www.youtube.com` },
    twitter: { icon: twitterIcon, url: `https://www.twitter.com` },
    facebook: { icon: facebookIcon, url: `https://www.facebook.com` },
    instagram: { icon: instagramIcon, url: `https://www.instagram.com` },
  };

  function SnsItem({ snsType }: { snsType: string }) {
    const Sns = SnsData[snsType as keyof typeof SnsData];
    return (
      <a href={Sns.url} target="_blank">
        <Image className={style.sns_icons} src={Sns.icon} alt="sns icon" />
      </a>
    );
  }

  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <h5 className={style.copyright}>{COPYRIGHT_TEXT}</h5>
        <div className={style.label_container}>
          <a className={style.footer_label}>{PRIVACY_POLICY_TEXT}</a>
          <a className={style.footer_label}>{FAQ_TEXT}</a>
        </div>
        <div className={style.sns_container}>
          <SnsItem snsType="facebook" />
          <SnsItem snsType="twitter" />
          <SnsItem snsType="youtube" />
          <SnsItem snsType="instagram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
