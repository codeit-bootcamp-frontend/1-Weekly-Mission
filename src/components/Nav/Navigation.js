import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import Logo from './Logo'
import './Navigation.css'
import SignButton from './SignButton'
import { getSample } from '../../api'
import Profile from './Profile'

function Navigation() {
  const [user, setUser] = useState(false);

  const loadUser = async () => {
    const result = await getSample("user");
    if (!result) return;
    setUser(result);
  }

  const changeNavColor = () => {
    const scrollY = window.scrollY;
    const nav = document.querySelector(".nav");
    const navHeight = nav.clientHeight;
    const navClass = nav.classList;

    scrollY > navHeight ? navClass.add("scroll") : navClass.remove("scroll");
  }

  document.addEventListener("scroll", changeNavColor)

  return (
    <nav className='nav'>
      <Logo src={logoImg} alt="링크브러리 홈화면으로 이동" />
      {user ? <Profile {...user} /> : <SignButton size="sm" loadUser={loadUser}>로그인</SignButton>}
    </nav>
  )
}

export default Navigation