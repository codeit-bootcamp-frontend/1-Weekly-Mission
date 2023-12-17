import defaultAvatar from "@/public/Avatar.png";
import useData from "@/hooks/useData";
import { Container, User, UserImg, UserText, UserTitle } from "@/components/Header/Header.styled";
import { PATHS } from "@/constants/path";

export default function Header() {
  const folderName = useData(PATHS.SHARED_FOLDERNAME);
  if (!folderName) {
    return null;
  }

  return (
    <Container>
      <User>
        <UserImg src={folderName.owner.profileImageSource ?? defaultAvatar.src} alt="유저 프로필 이미지" />
        <UserText>{folderName.owner.name}</UserText>
        <UserTitle>{folderName.folderName}</UserTitle>
      </User>
    </Container>
  );
}
