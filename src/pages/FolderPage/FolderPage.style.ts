import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const FolderPageSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const Header = styled.div`
  width: 100%;
  background-color: ${COLORS.BACKGROUND};
  padding: 6rem 32rem 9rem;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
`;