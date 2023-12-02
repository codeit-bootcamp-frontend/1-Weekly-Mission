import { Container, ProfileImg, ProfileText } from "@/components/Nav/Avatar/Profile.styled";

interface Props {
  profileImg: string;
  email: string;
}

export default function Profile({ profileImg, email }: Props) {
  return (
    <Container>
      <ProfileImg src={profileImg} alt="프로필 사진" />
      <ProfileText>{email}</ProfileText>
    </Container>
  );
}
