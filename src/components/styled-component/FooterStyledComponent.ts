import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: #111322;
  display: flex;
  justify-content: space-between;
  padding: 32px 104px 64px;
  @media (max-width: 767px) {
    display: grid;
    grid-template-areas:
      'm r'
      'l .';
    gap: 60px;
  }
`;

export const FoterLeft = styled.div`
  color: #676767;
  text-align: center;
  font-family: Arial;
  font-weight: 400;
  font-size: 16px;
  grid-area: l;
  @media (max-width: 767px) {
    text-align: left;
  }
`;

export const PolicyNFaqA = styled.a`
  color: #cfcfcf;
  font-family: Arial;
  font-size: 16px;
  font-weight: 400;
`;

export const FooterMidle = styled.div`
  display: flex;
  gap: 30px;
  grid-area: m;
  align-items: center;
`;
export const FooterRight = styled.div`
  display: flex;
  gap: 12px;
  grid-area: r;
`;
