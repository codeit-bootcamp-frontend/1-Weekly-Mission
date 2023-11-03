import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width : 100%;
  font-size: 1.6rem;

  span{
    display: flex;
    align-items: center;
    gap: 4px;
    color: #6d6afe;
    text-align: center;
    font-weight: 500;
    letter-spacing: -0.3px;
  }
  @media ${({theme}) => theme.device.mobile}{


    span{
      display : none;
    }
`
export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  padding: 0px;

   @media ${({theme}) => theme.device.mobile}{
    justify-content : start;
    flex-wrap : wrap;
    width : 325px;
   }

`
export const Button = styled.button`
  display : inline-flex;
  align-items: center;
  padding : 8px 12px;
  gap: 8px;
  height : 35px;
  list-style: none;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: ${({active}) => active ? '#6d6afe' : '#fff' };
  color : ${({active}) => active  ? '#fff' : '#000'};
  cursor :pointer
`
