import styled from 'styled-components'
import { device } from '../../style/device'

export const CardListContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    padding : 32px;
  }
`
