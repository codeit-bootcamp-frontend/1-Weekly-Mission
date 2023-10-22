import Logo from "./Logo";
import Profile from "./Profile";
import LoginButton from "./LoginButton";
import './Logo.css'

function Nav() {
  return (
    <>
      <Logo className='Logo' />
      <Profile />
      <LoginButton />
    </>

  )
}

export default Nav;