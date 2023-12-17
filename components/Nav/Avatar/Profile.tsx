import { Container, ProfileImg, ProfileText } from "@/components/Nav/Avatar/Profile.styled";
import defaultProfileImg from "@/public/Avatar.png";

interface Props {
  profileImg: string;
  email: string;
}

export default function Profile({ profileImg, email }: Props) {
  return (
    <Container>
      <ProfileImg src={profileImg ?? defaultProfileImg.src} alt="프로필 사진" />
      <ProfileText>{email}</ProfileText>
    </Container>
  );
}
