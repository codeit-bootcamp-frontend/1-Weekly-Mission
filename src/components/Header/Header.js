import defaultAvatar from '../../assets/Avatar.png'
import useData from '../../hooks/useReduce';
import { S } from './Header.styled';

function Header() {
  const [data] = useData('SHARED_FOLDERNAME')

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