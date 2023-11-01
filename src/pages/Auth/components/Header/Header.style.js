import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from 'styles/palette';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
`;

export const Logo = styled.img`
  width: 21rem;
`;

export const Redirect = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
`;

export const RedirectLink = styled(Link)`
  margin-left: 0.6rem;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  text-decoration: underline;
  color: ${COLORS['LB_PRIMARY']};
`;
