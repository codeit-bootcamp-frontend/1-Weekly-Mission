import logoImg from '../../assets/logo.svg'
import Logo from './Logo'
import SignButton from './SignButton'
import Profile from './Profile'
import { reduceData, useReduce } from '../../hooks/useReduce'
import { useLocation } from 'react-router'
import { getData } from '../../utils/api'
import S from '../styled'

function Avatar({ setIsUser = () => { } }) {
  const { pathname } = useLocation();
  const type = pathname === '/shared' ? "SHARED_USER" : "FOLDER_USER";

  const [userData, dispatch] = useReduce(reduceData, null);
  const handleLoadUser = (e) => {
    e.preventDefault();
    dispatch(getData(type))
    setIsUser(true);
  }

  const avatar = userData ?
    <Profile {...userData} /> :
    <SignButton onClick={handleLoadUser}>로그인</SignButton>;

  return (
    <>
      {avatar}
    </>
  )
}

function Navigation({ setIsUser, page }) {
  return (
    <>
      <S.NavBg />
      <S.Nav page={page} >
        <Logo src={logoImg} alt="링크브러리 홈화면으로 이동" />
        <Avatar setIsUser={setIsUser} />
      </S.Nav>
    </>
  )
}

export default Navigation