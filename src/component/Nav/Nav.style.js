import styled from 'styled-components';
import display from '../../css/display.js'


export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 33px 200px 32px;
  width: 100%;
  background-color: #f0f6ff;

  @media ${({theme}) => display.device.tablet}{
    padding-left: 32.5px;
    padding-right: 32.5px;
  }
  
  @media ${({theme}) => display.device.mobile} {
    padding-top: 18px;
    padding-bottom: 17px
  }
`

export const Inform = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const Profile = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 47px;
`
