import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const SocialContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1.2rem 2.4rem;
  justify-content: space-between;
  align-items: center;
  border: 0.1rem solid ${COLORS['LB_GRAY_20']};
  border-radius: 0.8rem;
  background-color: ${COLORS['LB_GRAY_10']};
`;

export const Text = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${COLORS['LB_GRAY_100']};
`;

export const SnsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Google = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  border: 0.1rem solid $linkbrary-gray-20;
  background-color: $linkbrary-white;

  img {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

export const Kakao = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  background-color: #f5e14b;

  img {
    width: 2.6rem;
    height: 2.4rem;
  }
`;
