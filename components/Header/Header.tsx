import defaultAvatar from "@/public/Avatar.png";
import useData from "@/hooks/useData";
import { Container, User, UserImg, UserText, UserTitle } from "@/components/Header/Header.styled";
import { URLS } from "@/utils/getData.type";

export default function Header() {
  const folderName = useData(URLS.SHARED_FOLDERNAME);

  return (
    <Container>
      <User>
        {folderName ? (
          <>
            <UserImg src={folderName.owner.profileImageSource ?? defaultAvatar} alt="유저 프로필 이미지" />
            <UserText>{folderName.owner.name}</UserText>
            <UserTitle>{folderName.folderName}</UserTitle>
          </>
        ) : (
          <p>폴더 정보를 읽어오는 데 실패했습니다.</p>
        )}
      </User>
    </Container>
  );
}
