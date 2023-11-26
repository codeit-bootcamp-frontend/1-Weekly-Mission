import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import facebookIcon from "assets/akar-icons_facebook-fill.svg";
import twitterIcon from "assets/akar-icons_twitter-fill.svg";
import youtubeIcon from "assets/akar-icons_youtube-fill.svg";
import instagramIcon from "assets/ant-design_instagram-filled.svg";

import * as S from "./FooterStyle";

const options = {
  root: null,
  rootMain: "0px",
  threshold: 0,
};

export default function Footer() {
  const target = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries[0]); // 삭제예정

      if (entries[0].isIntersecting) {
        // footer를 가장 위에 보이게
        console.log("관찰대상(footer)에 들어옴");
        setIsVisible(true);
      }
    }, options);

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
      setIsVisible(false);
    };
  }, []);

  return (
    <S.Wrapper ref={target} $isVisible={isVisible}>
      <S.Contact>
        <S.Rights>©codeit - 2023</S.Rights>
        <S.Policy>
          <S.Info>Privacy Policy</S.Info>
          <S.Info>FAQ</S.Info>
        </S.Policy>
        <S.Links>
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
        </S.Links>
      </S.Contact>
    </S.Wrapper>
  );
}
