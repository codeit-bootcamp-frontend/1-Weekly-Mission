import { styled } from "styled-components";

export const Container = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  gap : 2px;
  background:  #FFF;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.10);
`

export const Element = styled.div`
  display : flex;
  justify-content : center;
  padding : 7px 12px;

  :hover{
    color : ${({active}) => active ? '#6d6afe' : '#333236'};
  }
`
