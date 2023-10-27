import './Navigation.css'
import { useState } from 'react'
import { getData } from '../../utils/api'
import logoImg from '../../assets/logo.svg'
import Logo from './Logo'
import SignButton from './SignButton'
import Profile from './Profile'

function Navigation({ page, type = 'user', onClick }) {
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    const result = await getData(page, type);
    if (!result) return;
    if (page === 'folder') {
      const res = {};
      const flatResult = result.data[0];
      res.img = flatResult['image_source'];
      res.email = flatResult['email'];
      setUser(res);
      return;
    }
    setUser(result);
  }

  return (
    <>
      <div className='nav'>
      </div>
      <nav className='navbox'>
        <Logo src={logoImg} alt="링크브러리 홈화면으로 이동" />
        {user ? <Profile {...user} /> : <SignButton size="sm" loadUser={loadUser} onClick={onClick}>로그인</SignButton>}
      </nav>
    </>
  )
}

export default Navigation