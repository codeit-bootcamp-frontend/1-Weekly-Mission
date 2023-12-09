import * as S from './Profile.style';

interface Props {
  data?: {
    name: string;
    email: string;
    profileImageSource: string;
    image_source: string;
  };
}

const Profile = ({ data }: Props) => {
  if (!data) return null;

  const { name, email, profileImageSource, image_source } = data;

  return (
    <S.Container>
      {image_source ? (
        <S.Img src={image_source} alt={name} />
      ) : (
        <S.Img src={profileImageSource} alt={name} />
      )}
      <S.P>{email}</S.P>
    </S.Container>
  );
};

export default Profile;
