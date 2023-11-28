import * as S from './Profile.style';

interface Props {
  data?: {
    name: string;
    email: string;
    profileImageSource: string;
    image_source: string;
  };
}

function Profile({ data }: Props) {
  if (!data) return null;

  const { name, email, profileImageSource, image_source } = data;

  return (
    <S.Container>
      <S.Img src={image_source ?? profileImageSource} alt={name}></S.Img>
      <S.P>{email}</S.P>
    </S.Container>
  );
}

export default Profile;
