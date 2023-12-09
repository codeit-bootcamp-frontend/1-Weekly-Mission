import styled from 'styled-components';
import { COLORS } from './palettes';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${COLORS.BACKGROUND};
`;

export const Wrapper = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  color: ${COLORS.BLACK};
  margin-top: 16px;

  /* Linkbrary/body1-regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

export const LinkText = styled.span`
  color: ${COLORS.PRIMARY};
  border-bottom: 1px solid ${COLORS.PRIMARY};

  /* Linkbrary/body 1-semibold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SignInForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.8rem 1.5rem;
  border-width: 0.1rem;
  border-style: solid;
  border-color: ${COLORS.PRIMARY};
  border-radius: 0.8rem;
`;

export const SignInContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin: 30px 0;
`;

export const PasswordContainer = styled.div`
  border: 1px solid #000;
  display: flex;
`;

export const VisibleButton = styled.button`
  border: 1px solid #000;
  margin-left: -30px;
`;
