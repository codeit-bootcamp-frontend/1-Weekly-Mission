import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  padding: 32px 104px 64px;
  background-color: #111322;
  margin-top: 60px;

  @media ${({theme}) => theme.device.mobile}{
    padding: 32px 32px 64px;
    margin-top: 40px;
  }
`
export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #676767;
`

export const Links = styled.div`
  display: flex;
  gap: 30px;
`
export const SnsContainer = styled.div`
  display: flex;
  gap: 12px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #676767 !important;

  &:visited, &:hover{
    color: #0000ff;
  }
`