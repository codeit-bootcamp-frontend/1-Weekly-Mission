import { useEffect, useState } from 'react'
import logoImg from '../../assets/logo.svg'
import Logo from './Logo'
import './Navigation.css'
import SignButton from './SignButton'
import { getSample } from '../../api'
import useCatch from '../../hooks/useCatch'
import Profile from './Profile'

function Navigation() {
  const [user, setUser] = useState(false);
  const [userLoading, userLoadingError, getSampleCatch] = useCatch(getSample);

  const loadUser = async () => {
    const result = await getSampleCatch("user");
    if (!result) return;
    setUser(result);
  }
  useEffect(() => {
    loadUser();
  }, [])

  return (
    <nav className='nav'>
      <Logo src={logoImg} alt="링크브러리 홈화면으로 이동" />
      {user ? <Profile {...user} /> : <SignButton size="sm">로그인</SignButton>}
    </nav>
  )
}

export default Navigation