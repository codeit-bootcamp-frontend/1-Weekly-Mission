import styled from 'styled-components';

export const FooterSection = styled.div`
  display: flex;
  width: 1920px;
  height: 280px;
  padding-top: 120px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  height: 160px;
  padding: 32px 104px 64px 104px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  background-color: #111322;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Copyright = styled.div`
  color: #676767;
  text-align: center;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Info = styled.div`
  display: flex;
  width: 18.1rem;
  align-items: flex-start;
  gap: 3rem;

  color: #CFCFCF;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SNS = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

export const SNSIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;