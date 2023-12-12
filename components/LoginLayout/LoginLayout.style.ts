import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.graybg};
  height: 100vh;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 238px 0px 116px;
`;

export const TopLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  p {
    display: flex;
    gap: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    .login {
      font-size: 16px;
      color: ${theme.color.purpleblue};
      font-weight: 600;
    }
  }
`;
