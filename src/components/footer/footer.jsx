import { Link } from "react-router-dom";

import * as S from "./footer.style.js";
import facebookIconSrc from "assets/icons/facebook.svg";
import twitterIconSrc from "assets/icons/twitter.svg";
import youtubeIconSrc from "assets/icons/youtube.svg";
import instagramIconSrc from "assets/icons/instagram.svg";

export default function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.Copyright>©codeit - 2023</S.Copyright>
        <S.FooterMenuContainer>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </S.FooterMenuContainer>
        <S.FooterSnsContainer>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            area-label="페이스북 새 창 열기 링크"
          >
            <img
              src={facebookIconSrc}
              alt="페이스북 아이콘"
              width="20"
              height="20"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            area-label="트위터 페이지 새 창 열기 링크"
          >
            <img
              src={twitterIconSrc}
              alt="트위터 아이콘"
              width="20"
              height="20"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            area-label="유튜브 페이지 새 창 열기 링크"
          >
            <img
              src={youtubeIconSrc}
              alt="유튜브 아이콘"
              width="20"
              height="20"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            area-label="인스타그램 페이지 새 창 열기 링크"
          >
            <img
              src={instagramIconSrc}
              alt="인스타그램 아이콘"
              width="20"
              height="20"
            />
          </a>
        </S.FooterSnsContainer>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
}
