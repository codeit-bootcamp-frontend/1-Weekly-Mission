import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import HeroImg from "@/src/image/hero.png";

const HeaderHome = () => (
  <Header>
    <MainHeader>
      <MainTitle>
        <MainTitleGradient>
          <BackgroundClipText>세상의 모든 정보</BackgroundClipText>를<br />
          <Span>쉽게 저장하고 </Span>
          <Span>관리해 보세요</Span>
        </MainTitleGradient>
      </MainTitle>
      <AddLinkButton href="signup" className="button add_link">
        링크 추가하기
      </AddLinkButton>
      <MainImage src={HeroImg} alt="메인 이미지" className="main_image" />
    </MainHeader>
  </Header>
);

const Header = styled.header`
  padding: 7rem 36rem 0 36rem;
  background: #f0f6ff;
  width: 100%;
`;

const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;
  align-self: stretch;
`;

const MainTitle = styled.h1`
  text-align: center;
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 8rem;
  color: #000;
  min-width: 708px;
`;

const MainTitleGradient = styled.span`
  background-image: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
`;

const BackgroundClipText = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Span = styled.span``;

// const TitleBreakMiddle = styled.br`
//   display: none;
// `;

const AddLinkButton = styled(Link)`
  width: 35rem;
  padding: 1.6rem 2rem;
`;

const MainImage = styled(Image)`
  width: 120rem;
  height: 59rem;
`;

export default HeaderHome;
