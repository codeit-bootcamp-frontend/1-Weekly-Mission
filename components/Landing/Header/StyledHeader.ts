import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #edf7ff;
`;

export const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.4rem;
  padding: 7rem 0 0;

  @media (max-width: 1199px) {
    padding: 3.9rem 0 0;
    row-gap: 4rem;
  }

  @media (max-width: 767px) {
    padding: 2.8rem 3.2rem 0;
  }
`;

export const Slogan = styled.h1`
  width: 80rem;
  text-align: center;
  font-size: 3.2rem;
  line-height: 131.25%;
  font-weight: 700;

  @media (max-width: 1199px) {
    width: 48rem;
    font-size: 6.4rem;
    line-height: 125%;
  }

  @media (max-width: 767px) {
    width: 24rem;
  }
`;

export const SloganGradient = styled.span`
  background-image: linear-gradient(119deg, var(--primary) 0%, #ff9f9f 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const LinkButton = styled.div`
  width: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  cursor: pointer;
  background-image: linear-gradient(135deg, var(--primary) 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 600;

  @media (max-width: 767px) {
    width: 20rem;
    height: 3.7rem;
    font-size: 1.4rem;
  }
`;

export const HeroImageBox = styled.div`
  position: relative;
  width: 120rem;
  height: 59rem;

  @media (max-width: 1199px) {
    width: 69.8rem;
    height: 34.3rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: fit-content;
  }
`;
