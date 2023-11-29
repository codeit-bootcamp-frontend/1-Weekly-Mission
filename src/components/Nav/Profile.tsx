import { Container, ProfileImg, ProfileText } from "src/components/Nav/Profile.styled";

interface Props {
  profileImg: string;
  email: string;
}

function Profile({ profileImg, email }: Props) {
  return (
    <Container>
      <ProfileImg src={profileImg} alt="프로필 사진" />
      <ProfileText>{email}</ProfileText>
    </Container>
  );
}

export default Profile;
