import styled, { css } from 'styled-components';
import { onTablet, onPc } from 'styles/mediaQuery';
import { textGradientBackground } from 'styles/styleUtils';

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  row-gap: 0;
  grid-template-areas:
    'title'
    'img'
    'description';

  ${onTablet} {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    column-gap: 5.1rem;
    row-gap: 0;

    ${({ layout }) => {
      if (layout === 'odd') {
        return css`
          grid-template-areas:
            'title img'
            'description img';
        `;
      } else if (layout === 'even') {
        return css`
          grid-template-areas:
            'img title'
            'img description';
        `;
      }
    }}
  }

  ${onPc} {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    column-gap: 15.7rem;
    row-gap: 1rem;

    ${({ layout }) => {
      if (layout === 'odd') {
        return css`
          grid-template-areas:
            'title img'
            'description img';
        `;
      } else if (layout === 'even') {
        return css`
          grid-template-areas:
            'img title'
            'img description';
        `;
      }
    }}
  }
`;

export const Title = styled.div`
  grid-area: title;
  align-self: flex-end;
  width: 30rem;
  p {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.03rem;

    span {
      background: ${({ gradient }) => gradient};
      ${textGradientBackground}
    }

    ${onTablet} {
      width: 26.2rem;
      font-size: 4.8rem;
    }

    ${onPc} {
      width: 29.1rem;
      font-size: 4.8rem;
    }
  }
`;

export const Description = styled.p`
  grid-area: description;
  width: 100%;
  color: #6b6b6b;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;

  ${onTablet} {
    width: 26.2rem;
    font-size: 1.6rem;
  }

  ${onPc} {
    width: 27.8rem;
    font-size: 1.6rem;
  }
`;

export const ImgContainer = styled.div`
  grid-area: img;
  margin-top: 2rem;
  margin-bottom: 1.6rem;
  width: 100%;
  height: auto;

  ${onTablet} {
    margin: 0;
    width: 38.4rem;
    height: 31.5rem;
  }

  ${onPc} {
    margin: 0;
    width: 55rem;
    height: 45rem;
  }

  img {
    width: 100%;
  }
`;
