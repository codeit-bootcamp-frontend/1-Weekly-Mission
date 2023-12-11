import styled from 'styled-components';
import { COLORS } from '@/styles/palettes';

export const Container = styled.div`
  width: 100%;
  height: 16rem;
  background-color: ${COLORS.BLACK};
  margin-top: 6rem; 
`;

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 3.2rem 10.4rem 6.4rem;
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

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const Info = styled.div`
  display: flex;
  gap: 3rem;

  color: #676767;
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`; 

export const SNS = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`; 
