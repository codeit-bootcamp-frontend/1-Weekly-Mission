import * as S from './Banner.style';

interface Props {
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}

function Banner({ name, owner }: Props) {
  return (
    <S.BannerContainer>
      <S.Img src={owner?.profileImageSource} alt='폴더 유저 프로필 이미지' />
      <S.OwnerName>{`@${owner.name}`}</S.OwnerName>
      <S.FolderName>{name}</S.FolderName>
    </S.BannerContainer>
  );
}

export default Banner;
