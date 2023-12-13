import styled from 'styled-components';
import { DeviceQuery } from './media';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
  width: 100%;
  background-color: #edf7ff;

  ${DeviceQuery.tablet`
    margin-bottom: 30px;
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
  row-gap: 40px;
  padding-top: 70px;
  width: 100%;

  h1 {
    margin: 0;
    text-align: center;
    font-weight: 700;
    line-height: 80px;
    font-size: 64px;
  }

  span {
    font-size: 64px;
    background: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ${DeviceQuery.tablet`
    padding: 39px 250px 0px;
    height: 756px;

    h1,
    span {
      width: 480px;
      word-break: keep-all;
    }
  `}

  ${DeviceQuery.mobile`
    padding: 28px 32px 0;
    gap: 24px;
    height: 399px;
    margin-bottom: 0;

    h1,
    span {
      font-size: 32px;
      line-height: 42px;
      width: 240px;
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
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #f5f5f5;
  cursor: pointer;

  ${DeviceQuery.mobile`
    padding: 10px 16px;
    font-size: 14px;
    height: 37px;
    width: 200px;
  `}
`;

export const ImageBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 1200px;
  height: 590px;
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
    width: 650px;
    height: 383px;
    margin: 29px 23px 0;
  `}

  ${DeviceQuery.mobile`
    width: 302px;
    height: 178px;
  `}
`;

export const Article = styled.div`
  width: 100%;
  padding: 50px auto;

  .section {
    display: grid;
    justify-content: center;
    column-gap: 157px;
    row-gap: 10px;
    width: 100%;
    height: 550px;
    padding: 50px 0;

    ${DeviceQuery.tablet`
      justify-content: center;
      width: 100%;
      height: 415px;
      column-gap: 51px;
    `}

    ${DeviceQuery.mobile`
      padding: 40px 32px;
      grid-template: none;
      justify-content: center;
      column-gap: 0;
      row-gap: 16px;
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
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: -0.3px;

    ${DeviceQuery.mobile`
      font-size: 24px;
    `}
  }

  .description {
    font-size: 16px;
    font-weight: 500;
    color: #6b6b6b;
    line-height: 24px;

    ${DeviceQuery.mobile`
      font-size: 15px;
    `}
  }

  .article-image {
    width: 550px;
    height: 450px;

    ${DeviceQuery.tablet`
      width: 384px;
      height: 315px;
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
