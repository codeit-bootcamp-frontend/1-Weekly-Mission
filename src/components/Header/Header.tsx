import defaultAvatar from "src/assets/Avatar.png";
import useData from "src/hooks/useData";
import { Container, User, UserImg, UserText, UserTitle } from "src/components/Header/Header.styled";
import { URLS } from "src/utils/getData.type";

function Header() {
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

export default Header;
