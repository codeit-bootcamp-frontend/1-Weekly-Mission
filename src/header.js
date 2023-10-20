import logo from './assets/images/logo.png'
import './header.css'

function Header() {
    return (
        <div className='nav'>
            <a href="index.html"><img src={logo} alt='logo' width="133px" height="24px" /></a>
            <a href="/signin.html" className='link'>
                로그인
            </a>
        </div>
    );
}

export default Header;