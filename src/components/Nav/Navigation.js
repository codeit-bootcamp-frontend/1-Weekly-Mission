import logoImg from '../../assets/logo.svg'
import Logo from './Logo'
import SignButton from './SignButton'
import Profile from './Profile'
import styled from 'styled-components'
import { reduceData, useReduce } from '../../hooks/useReduce'

const NavBg = styled.div`
  position: absolute;
  background-color: var(--Gray1);
  width: 100%;
  height: 7rem;
`

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "logo sign";
  align-items: center;
  position: ${({ page }) => page === 'folder' ? `relative` : `sticky`};
  top: 0;
  z-index: 1;
  background-color: var(--Gray1-80);
  padding: 1.6rem 3.2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: calc(50vw - 40rem) 1fr 1fr calc(50vw - 40rem);
    grid-template-areas: ". logo sign .";
  }

  @media screen and (min-width: 1200px) {
    padding: 2rem 20rem;
    grid-template-columns: calc(50vw - 96rem) 1fr 1fr calc(50vw - 96rem);
    grid-template-areas: ". logo sign .";
  }
`

function Avatar({ page, type, setIsUser }) {
  const [userData, dispatch] = useReduce(reduceData, undefined);
  const avatar = userData ? <Profile {...userData} /> :
    <SignButton size="sm" page={page} type={type} dispatch={dispatch} onClick={setIsUser}>로그인</SignButton>;

  return (
    <>
      {avatar}
    </>
  )
}

function Navigation({ page, type = 'user', setIsUser }) {
  return (
    <>
      <NavBg />
      <Nav page={page}>
        <Logo src={logoImg} alt="링크브러리 홈화면으로 이동" />
        <Avatar page={page} type={type} setIsUser={setIsUser} />
      </Nav>
    </>
  )
}

export default Navigation