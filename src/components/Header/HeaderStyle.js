import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 140px;
  padding: 20px 624px 60px 624px;
  flex-direction: column;
  gap: 20px;
  background: var(--linkbrary-bg);
`;

export const HeaderOwner = styled.div`
  gap: 12px;
`;

export const HeaderOwnerImg = styled.img`
  height: 60px;
  border-radius: 70%;
`;

export const HeaderOwnerName = styled.p`
  color: var(--text-color-light-mode);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;

export const HeaderName = styled.h1`
  color: #000;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  /* Linkbrary/h1-semibold */
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
