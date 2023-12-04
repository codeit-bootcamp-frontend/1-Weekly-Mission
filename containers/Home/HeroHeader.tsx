import Image from "next/image";
import styled from "styled-components";

import hero from "@/public/images/hero.png";
import LinkButton from "../../components/Button/LinkButton";

const HeroHeader = () => {
  return (
    <StyledHeroHeaderBox>
      <StyledHeroSloganHeader>
        <span>세상의 모든 정보</span>
        를
        <br />
        쉽게 저장하고 관리해 보세요
      </StyledHeroSloganHeader>
      <LinkButton link="signup" size="long" text="링크 추가하기"></LinkButton>
      <StyledHeroImage src={hero} alt="Linkbrary 서비스 소개" />
    </StyledHeroHeaderBox>
  );
};

export default HeroHeader;

const StyledHeroHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4rem;
  padding-top: 7rem;

  @media screen and (max-width: 767px) {
    row-gap: 2.4rem;
    padding-top: 0;
  }
`;

const StyledHeroSloganHeader = styled.h1`
  text-align: center;
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 8rem;

  span {
    background-image: var(--linkbrary-slogan-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 47.2rem;
    word-break: keep-all;
  }

  @media screen and (max-width: 767px) {
    font-size: 3.2rem;
    line-height: 4.2rem;
    word-break: keep-all;
    width: 23.6rem;
  }
`;

const StyledHeroImage = styled(Image)`
  width: 120rem;
  height: 59rem;

  @media screen and (max-width: 767px) {
    width: 30.2792rem;
    height: 17.8712rem;
    flex-shrink: 0;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 65rem;
    height: 38.3rem;
  }
`;
