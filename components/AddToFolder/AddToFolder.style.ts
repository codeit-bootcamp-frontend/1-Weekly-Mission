import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 4px;

`;

export const Box = styled.div`
  display: flex;
  padding : 8px;
  gap: 8px;
  color: #373740;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; 

  :hover {
    background-color : #F0F6FF;
  }
`
export const Span = styled.span`
  display: flex;
  align-items : center;
  color: #9FA6B2;
  font-size: 14px;
  line-height: normal;
`