import styled from "styled-components";
import { RESPONSIBLE_MEDIA_QUERIES } from "@/constants/mediaQueries";
import Image from "next/image";

export const HeroWrap = styled.section`
  background-color: var(--linkbrary-zircon);
  display: flex;
  padding: 4.375rem 0 0;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
    padding: 2.4375rem 15.625rem 0rem;
  }
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    padding: 1.75rem 2rem 0;
    gap: 1.5rem;
  }
`;

export const Title = styled.h1`
  color: #000;
  text-align: center;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 8rem;

  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    font-size: 3.2rem;
    line-height: 4.2rem;
  }
`;

export const Highlight = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(91deg, var(--linkbrary-primary-color) 17.28%, #ff9f9f 102.98%);
`;

export const HeroBr = styled.br`
  display: none;
  ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
    display: block;
  }
`;

export const HeroImageContainer = styled.div`
  width: 120rem;
  ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
    width: 65rem;
  }
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    width: 100%;
    flex: 1 0 10rem;
  }
`;
