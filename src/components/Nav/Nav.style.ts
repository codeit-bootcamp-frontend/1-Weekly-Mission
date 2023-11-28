import styled from "styled-components";
import { COLORS } from "styles/palette";


export const Container = styled.div`
  display: flex;
  width: 1920px;
  padding: 2rem 20rem;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background-color: ${COLORS.BACKGROUND};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Logo = styled.img`
  width: 8.8rem;
  height: 1.6rem;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const ProfileImage = styled.img`
  width: 2.8rem;
  height: 2.8rem;
`;

export const ProfileAccount = styled.span`
  color: #373740;

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;