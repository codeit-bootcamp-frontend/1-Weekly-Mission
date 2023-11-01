import styled from 'styled-components'
import { flexCenter } from '../../style/common'
import { device } from '../../style/device'

export const Profile = styled.div`
  display: flex;
  gap: 10px;
`

export const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 70%;
`

export const ProfileEmail = styled.span`
  ${flexCenter}
  @media ${device.tablet} {
    z-index: 0;
  }
`
