import * as S from './Profile.style';

interface Props {
  profile?: {
    name: string;
    email: string;
    profileImageSource?: string;
    image_source?: string;
  };
}

const Profile = ({ profile }: Props) => {
  if (!profile) return null;

  const { name, email, profileImageSource, image_source } = profile;

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
