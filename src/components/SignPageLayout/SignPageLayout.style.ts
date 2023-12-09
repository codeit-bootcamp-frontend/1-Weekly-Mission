import { COLORS } from '@styles/color';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-top: 23.8rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Logo = styled.img`
  height: 3.8rem;
`;

export const Recommendation = styled.div`
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: flex;
  gap: 0.8rem;
`;

export const RecommendationLink = styled(Link)`
  color: ${COLORS.PRIMARY};
  font-weight: 600;
  text-decoration: underline;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3.2rem;
  width: 40rem;
`;
