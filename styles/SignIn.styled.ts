import styled from 'styled-components';
import { COLORS } from './palettes';
import Link from 'next/link';

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

export const SignInContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin: 3rem 0;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1.2rem;
  font-size: 1.4rem;

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.8rem 1.5rem;
  border-width: 0.1rem;
  border-style: solid;
  border-color: ${COLORS.PRIMARY};
  border-radius: 0.8rem;
`;

export const ErrorText = styled.p`
  color: ${COLORS.RED};
  margin-top: 6px;

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const VisibleButton = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  position: relative;
  margin-left: -30px;
`;

export const SnsContainer = styled.div`
  border: 1px solid ${COLORS.GRAY_300};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border-radius: 0.8rem;
  margin-top: 3.2rem;
`;

export const SnsText = styled.div`
  color: ${COLORS.GRAY_600};

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SnsIconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const SnsIconWrapper = styled(Link)`
  width: 4.2rem;
  height: 4.2rem;
  position: relative;
  cursor: pointer;
`;

