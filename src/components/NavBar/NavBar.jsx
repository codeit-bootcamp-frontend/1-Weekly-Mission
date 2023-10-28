import { useEffect, useState } from 'react';
import { getUser } from '../../api/getUser';
import './NavBar.style.css';

function Logo({ url = '/', src }) {
  return (
    <>
      <a href={url}>
        <img src={src} alt='logo' />
      </a>
    </>
  );
}

function Profile({ profileUrl, userEmail }) {
  return (
    <div className='profile'>
      <img src={profileUrl} alt='profile' />
      <p>{userEmail}</p>
    </div>
  );
}

export default function NavBar() {
  const [userItem, setUserItem] = useState({
    id: null,
    name: '',
    email: '',
    profileImageSource: '',
  });

  async function getUserItem() {
    const user = await getUser();

    setUserItem({
      id: user.id,
      name: user.name,
      email: user.email,
      profileImageSource: user.profileImageSource,
    });
  }

  useEffect(() => {
    getUserItem();
  }, []);

  return (
    <div className='header'>
      <Logo src='/assets/logo.svg' />
      <Profile
        profileUrl={userItem.profileImageSource}
        userEmail={userItem.email}
      />
    </div>
  );
}
