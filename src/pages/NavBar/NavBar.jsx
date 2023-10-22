import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import { useEffect, useState } from 'react';
import { getUsers } from '../../api/getUsers';
import './NavBar.style.css';

export default function NavBar() {
  const [userItems, setUserItems] = useState([]);

  async function getUserItems() {
    setUserItems(await getUsers());
  }

  useEffect(() => {
    getUserItems();
  }, []);

  return (
    <div className='header'>
      <img src={logo} alt='logo' />
      {userItems ? (
        <div className='profile'>
          <img src={avatar} alt='profile' />
          <p>{userItems.email}</p>
        </div>
      ) : (
        <button>로그인</button>
      )}
    </div>
  );
}
