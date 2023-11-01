import * as S from './Banner.style';

function Banner({ info }) {
  const { name: folderName, owner } = info;
  const { name: ownerName, profileImageSource } = owner;
  return (
    <S.BannerContainer>
      <S.Img src={profileImageSource} alt='폴더 유저 프로필 이미지' />
      <S.OwnerName>{`@${ownerName}`}</S.OwnerName>
      <S.FolderName>{folderName}</S.FolderName>
    </S.BannerContainer>
  );
}

export default Banner;
