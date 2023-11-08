import styled from "styled-components";
import colors from "../../style/colors";

export const HeaderContainer = styled.header`

// 여기가 깨지는데 이유를 모르겠어요
  display: flex;
  align-items: center;
  height: 17rem;
  padding: 4rem 3rem;
  flex-direction: column;
  gap: 1.25rem;
  background: ${colors.background};
`;

export const HeaderOwner = styled.div`
  gap: 0.75rem;
`;

export const HeaderOwnerImg = styled.img`
  height: 3.75rem;
  border-radius: 70%;
`;

export const HeaderOwnerName = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: center;
`;

export const HeaderName = styled.h1`
  color: #000;
  text-align: center;
  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Pretendard;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
