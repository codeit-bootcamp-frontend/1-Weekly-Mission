import styled from 'styled-components';
import { DeviceQuery } from './media';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7rem;
  width: 100%;
  background-color: #edf7ff;

  ${DeviceQuery.tablet`
    margin-bottom: 3rem;
  `}

  ${DeviceQuery.mobile`
    margin-bottom: 0;
  `}
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  row-gap: 4rem;
  padding-top: 7rem;
  width: 100%;

  h1 {
    margin: 0;
    text-align: center;
    font-weight: 700;
    line-height: 8rem;
    font-size: 6.4rem;
  }

  span {
    font-size: 6.4rem;
    background: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ${DeviceQuery.tablet`
    padding: 3.9rem 25rem 0rem;
    height: 75.6rem;

    h1,
    span {
      width: 48rem;
      word-break: keep-all;
    }
  `}

  ${DeviceQuery.mobile`
    padding: 2.8rem 3.2rem 0;
    gap: 2.4rem;
    height: 39.9rem;
    margin-bottom: 0;

    h1,
    span {
      font-size: 3.2rem;
      line-height: 4.2rem;
      width: 24rem;
    }
  `}

  .link {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
`;

export const LinkAddButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  width: 350px;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  color: #f5f5f5;
  cursor: pointer;

  ${DeviceQuery.mobile`
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
    height: 3.7rem;
    width: 20rem;
  `}
`;

export const ImageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 120rem;
  height: 59rem;
  overflow: hidden;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 67.68%,
    #f0f6ff 94.76%
  );
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);

  ${DeviceQuery.tablet`
    width: 65rem;
    height: 38.3rem;
    margin: 2.9rem 2.3rem 0;
  `}

  ${DeviceQuery.mobile`
    width: 30.2rem;
    height: 17.8rem;
  `}
`;

export const Article = styled.div`
  width: 100%;
  padding: 5rem auto;

  .section {
    display: grid;
    justify-content: center;
    column-gap: 15.7rem;
    row-gap: 1rem;
    width: 100%;
    height: 55rem;
    padding: 50px 0;

    ${DeviceQuery.tablet`
      justify-content: center;
      width: 100%;
      height: 41.5rem;
      column-gap: 5.1rem;
    `}

    ${DeviceQuery.mobile`
      padding: 4rem 3.2rem;
      grid-template: none;
      justify-content: center;
      column-gap: 0;
      row-gap: 1.6rem;
      height: fit-content;
    `}
  }

  .right .title {
    grid-row: 2 / 3;

    ${DeviceQuery.mobile`
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    `}
  }

  .right .description {
    grid-row: 3 / 4;

    ${DeviceQuery.mobile`
      grid-row: 3 / 4;
      grid-column: 1 / 2;
    `}
  }

  .right .article-image {
    grid-column: 2 / 3;
    grid-row: 1 / 5;

    ${DeviceQuery.mobile`
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    `}
  }

  .left .title {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    ${DeviceQuery.mobile`
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    `}
  }

  .left .description {
    grid-column: 2 / 3;
    grid-row: 3 / 4;

    ${DeviceQuery.mobile`
      grid-row: 3 / 4;
      grid-column: 1 / 2;
    `}
  }

  .left .article-image {
    grid-row: 1 / 5;
    grid-column: 1 / 2;

    ${DeviceQuery.mobile`
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    `}
  }

  .title,
  .gra-title {
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 5.8rem;
    letter-spacing: -0.03rem;

    ${DeviceQuery.mobile`
      font-size: 2.4rem;
    `}
  }

  .description {
    font-size: 1.6rem;
    font-weight: 500;
    color: #6b6b6b;
    line-height: 2.4rem;

    ${DeviceQuery.mobile`
      font-size: 1.5rem;
    `}
  }

  .article-image {
    width: 55rem;
    height: 45rem;

    ${DeviceQuery.tablet`
      width: 38.4rem;
      height: 31.5rem;
    `}

    ${DeviceQuery.mobile`
      width: 100%;
      height: auto;
    `}
  }

  .gra-title {
    background-image: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
  }

  .background-clip-text {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const Br = styled.br`
  ${DeviceQuery.mobile`
    word-break: keep-all;
    display: none;
    
  `}
`;
