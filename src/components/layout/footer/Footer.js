import { Link } from "react-router-dom";

import facebookIcon from "assets/akar-icons_facebook-fill.svg";
import twitterIcon from "assets/akar-icons_twitter-fill.svg";
import youtubeIcon from "assets/akar-icons_youtube-fill.svg";
import instagramIcon from "assets/ant-design_instagram-filled.svg";

import * as style from "./FooterStyle";

export default function Footer() {
  return (
    <style.Wrapper>
      <style.Contact>
        <style.Rights>©codeit - 2023</style.Rights>
        <style.Policy>
          <style.Info>Privacy Policy</style.Info>
          <style.Info>FAQ</style.Info>
        </style.Policy>
        <style.Links>
          <Link to="https://www.facebook.com/?locale=ko_KR" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="facebook" />
          </Link>
          <Link to="https://twitter.com/?lang=ko" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="twitter" />
          </Link>
          <Link to="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src={youtubeIcon} alt="youtube" />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="instagram" />
          </Link>
        </style.Links>
      </style.Contact>
    </style.Wrapper>
  );
}
