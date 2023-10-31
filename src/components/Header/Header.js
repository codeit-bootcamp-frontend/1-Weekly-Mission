import { useEffect } from 'react';
import defaultAvatar from '../../assets/Avatar.png'
import { getData } from '../../utils/api'
import { reduceData, useReduce } from '../../hooks/useReduce';
import S from '../styled';

function Header({ page, type = '' }) {
  const [data, dispatch] = useReduce(reduceData, undefined);

  useEffect(() => {
    (async function () {
      dispatch(await getData(page, type));
    })();
  }, [page, type])

  return (
    <S.Header>
      <S.DivUser>
        {data ? (
          <>
            <S.ImgUser src={data.owner.profileImageSource ?? defaultAvatar} alt='유저 프로필 이미지' />
            <S.PUser>{data.owner.name}</S.PUser>
            <S.H1User>{data.folderName}</S.H1User>
          </>
        ) : <p>폴더 정보를 읽어오는 데 실패했습니다.</p>}
      </S.DivUser>
    </S.Header>
  )
}

export default Header