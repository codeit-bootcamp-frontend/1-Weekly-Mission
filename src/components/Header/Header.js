import { useEffect, useState } from 'react';
import defaultAvatar from '../../assets/Avatar.png'
import './Header.css'
import { getData } from '../../utils/api'

function Header({ page, type = '' }) {
  const [folder, setFolder] = useState('');

  const loadData = async (...option) => {
    const res = await getData(...option);
    if (!res) return;
    const newfolder = res.folder;
    setFolder(newfolder);
  }

  useEffect(() => {
    loadData(page, type);
  }, [page, type])

  return (
    <header className='header'>
      <div className='user' >
        {folder ? (
          <>
            <div className='user__box'>
              <img className='user__img' src={folder.owner.profileImageSource ?? defaultAvatar} alt='유저 프로필 이미지' />
              <p className='user__name'>{folder.owner.name}</p>
            </div>
            <h1 className='user__folder-name'>{folder.name}</h1>
          </>
        ) : <p> 오류입니다.</p>}
      </div>
    </header>
  )
}

export default Header