import '../styles/Nav.css';
import Button from './Button';
import logo from '../assets/logo.svg';

const INIT_USER = {
  profileImageSource: '',
  email: '',
};

const Account = ({ user = INIT_USER }) => {
  return (
    <div className='user-account'>
      <img
        src={user.profileImageSource}
        alt='프로필 사진'
        className='user-profile-image'
      />
      <div className='user-email'>{user.email}</div>
    </div>
  );
};

export default function Nav({ user }) {
  return (
    <header className='header'>
      <div className='nav-bar'>
        <img src={logo} alt='로고' className='nav-logo' />
        {user.email ? (
          <Account user={user} />
        ) : (
          <Button type='로그인' className='nav-button' />
        )}
      </div>
    </header>
  );
}
