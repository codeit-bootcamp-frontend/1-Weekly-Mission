import logoImg from '../../assets/logo.svg'
import Logo from './Logo'
import SignButton from './SignButton'
import Profile from './Profile'
import { reduceData, useReduce } from '../../hooks/useReduce'
import S from '../styled'

function Avatar({ page, type, setIsUser }) {
  const [userData, dispatch] = useReduce(reduceData, undefined);
  const avatar = userData ? <Profile {...userData} /> :
    <SignButton page={page} type={type} dispatch={dispatch} onClick={setIsUser}>로그인</SignButton>;

  return (
    <>
      {avatar}
    </>
  )
}

function Navigation({ page, type = 'user', setIsUser }) {
  return (
    <>
      <S.NavBg />
      <S.Nav page={page}>
        <Logo src={logoImg} alt="링크브러리 홈화면으로 이동" />
        <Avatar page={page} type={type} setIsUser={setIsUser} />
      </S.Nav>
    </>
  )
}

export default Navigation