import { onMobile, onTablet } from '@styles/mediaQuery';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4rem;
  padding-top: 7rem;
  background-color: #edf7ff;

  ${onTablet} {
    padding-top: 3.9rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;

    br {
      display: none;
    }
  }

  ${onMobile} {
    row-gap: 2.4rem;
    padding-top: 2.8rem;
  }
`;

export const HeroImage = styled.div`
  width: 120rem;
  height: 59rem;

  ${onTablet} {
    width: 69.8rem;
    height: 34.3rem;
  }

  ${onMobile} {
    width: 100%;
    height: auto;
  }
`;

export const Cta = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.4rem;
  cursor: pointer;
  background-image: linear-gradient(135deg, #6d6afe 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 600;
  width: 35rem;

  ${onMobile} {
    height: 3.7rem;
    font-size: 1.4rem;
    width: 20rem;
  }
`;

export const Slogan = styled.h1`
  text-align: center;
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 8rem;

  ${onMobile} {
    font-size: 3.2rem;
    line-height: 4.2rem;
  }
`;

const BackgroundClipText = css`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const SloganGradient = styled.span`
  background-image: linear-gradient(119deg, #6d6afe 0%, #ff9f9f 100%);
  ${BackgroundClipText}
`;

export const Article = styled.article`
  padding-top: 7rem;
  padding-bottom: 12rem;

  ${onTablet} {
    padding-top: 3rem;
    padding-bottom: 12rem;

    br {
      display: none;
    }
  }

  ${onMobile} {
    padding: 0;
  }
`;

export const Section = styled.section`
  display: grid;
  justify-content: center;
  column-gap: 15.7rem;
  row-gap: 1rem;
  width: 100%;
  height: 55rem;
  padding: 5rem 0;

  &:nth-of-type(odd) {
    grid-template:
      '. image'
      'title image'
      'description image'
      '. image'
      /29.1rem 55rem;
  }

  &:nth-of-type(even) {
    grid-template:
      'image .'
      'image title'
      'image description'
      'image .'
      /55rem 29.1rem;
  }

  ${onTablet} {
    height: 41.5rem;
    column-gap: 5.1rem;

    &:nth-of-type(odd) {
      grid-template:
        '. image'
        'title image'
        'description image'
        '. image'
        /26.2rem 38.5rem;
    }

    &:nth-of-type(even) {
      grid-template:
        'image .'
        'image title'
        'image description'
        'image .'
        /38.5rem 26.2rem;
    }
  }

  ${onMobile} {
    padding: 4rem 3.2rem;
    height: auto;
    row-gap: 0;

    &:nth-of-type(odd),
    &:nth-of-type(even) {
      grid-template:
        'title'
        'image'
        'description';
    }
  }
`;

export const Title = styled.h2`
  grid-area: title;
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 5.8rem;
  letter-spacing: -0.03rem;

  ${onMobile} {
    font-size: 2.4rem;
    line-height: 2.9rem;
    margin-bottom: 2rem;
  }
`;

export const Title1Gradient = styled.span`
  background-image: linear-gradient(117deg, #fe8a8a 2.29%, #a4ceff 100%);
  ${BackgroundClipText}
`;

export const Title2Gradient = styled.span`
  background-image: linear-gradient(304deg, #6fbaff 0%, #ffd88b 100%);
  ${BackgroundClipText}
`;

export const Title3Gradient = styled.span`
  background-image: linear-gradient(133deg, #2945c7 0%, #dbe1f8 100%);
  ${BackgroundClipText}
`;

export const Title4Gradient = styled.span`
  background-image: linear-gradient(310deg, #fe578f 0%, #68e8f9 100%);
  ${BackgroundClipText}
`;

export const Description = styled.p`
  grid-area: description;
  font-size: 1.6rem;
  font-weight: 500;
  color: #6b6b6b;
  line-height: 150%;

  ${onMobile} {
    margin-top: 1.6rem;
  }
`;

export const ContentImage = styled.div`
  position: relative;
  grid-area: image;
  width: 55rem;
  height: 45rem;

  ${onTablet} {
    width: 38.5rem;
    height: 31.5rem;
  }

  ${onMobile} {
    width: 100%;
    height: auto;
  }
`;
