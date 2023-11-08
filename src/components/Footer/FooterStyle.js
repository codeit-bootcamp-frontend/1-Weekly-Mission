import styled from 'styled-components'
import colors from '../../style/colors'
import { device } from '../../style/device'
export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  padding-top: 20px;
  background: ${colors.julgeBlack};
  @media ${device.mobile} {
    padding: 30px;
  }
`

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`

export const FooterInfo = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  font-family: Arial;
  font-size: 1rem;
  font-weight: 400;

  @media ${device.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 6em;
    flex-direction: column;
  }
`

export const Codeit2023 = styled.div`
  color: #676767;
  text-align: center;
  grid-row: 2;
  grid-column: 1;
  @media ${device.mobile} {
    text-align: start;
  }
}
`

export const ExtraInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.875rem;
  grid-row: 1;
  grid-column: 1;
  justify-content: flex-start;
  word-break: keep-all;
  font-size: 17px;
  white-space: nowrap;
`

export const Link = styled.a`
  color: #cfcfcf;
  text-decoration: none;
`

export const SnsIcons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  grid-row: 1;
  justify-content: flex-end;
`

export const SnsIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`
