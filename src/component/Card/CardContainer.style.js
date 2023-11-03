import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 25px;
  

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 25px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  } 
`;

export const Button = styled.button`
  display : none;

  @media ${({theme}) => theme.device.mobile}{
    display : block;
    position : fixed;
    bottom : 101px;
    left : 35%;
    padding : 8px 24px;
    border-radius: 20px;
    border: 1px solid #FFF;
    background: #6D6AFE;  
    color: #E7EFFB;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.3px;
    gap : 4px;
  }

`