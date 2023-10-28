import { useEffect } from 'react';
import defaultAvatar from '../../assets/Avatar.png'
import './Header.css'
import { getData } from '../../utils/api'
import { reduceData, useReduce } from '../../hooks/useReduce';

function Header({ page, type = '' }) {
  const [data, dispatch] = useReduce(reduceData, undefined);

  useEffect(() => {
    (async function () {
      dispatch(await getData(page, type));
    })();
  }, [page, type])

  return (
    <header className='header'>
      <div className='user' >
        {data ? (
          <>
            <div className='user__box'>
              <img className='user__img' src={data.owner.profileImageSource ?? defaultAvatar} alt='유저 프로필 이미지' />
              <p className='user__name'>{data.owner.name}</p>
            </div>
            <h1 className='user__folder-name'>{data.folderName}</h1>
          </>
        ) : <p>폴더 정보를 읽어오는 데 실패했습니다.</p>}
      </div>
    </header>
  )
}

export default Header