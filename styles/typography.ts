import { css } from 'styled-components';

const common = css`
  font-feature-settings: 'clig' off, 'liga' off;
  font-style: normal;
`;

const H1 = `
  ${common}
  font-family: Pretendard;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const BodyRegular1 = `
  ${common}
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const BodyRegular2 = `
  ${common}
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;`;

const BodyRegular3 = `
  ${common}
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;`;

const Caption1 = `
  ${common}
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;`;

const Caption2 = `
  ${common}
  font-family: Arial;
  font-size: 1.6rem;
  font-style:normal;
  font-weight: 400;
  line-height: normal;`;

export { H1, BodyRegular1, BodyRegular2, BodyRegular3, Caption1, Caption2 };
