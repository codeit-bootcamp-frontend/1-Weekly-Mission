import styled, { css } from 'styled-components'
import colors from '../../style/colors'

export const NavContainer = styled.nav`
  height: 1.5625rem;
  padding: 2rem 12rem;
  background: ${colors.background};
  ${(props) =>
    props.path === 'shared' &&
    css`
      position: sticky;
      top: 0;
    `};
`

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoImage = styled.img`
  width: 8.3125rem;
  height: 1.5rem;
`
