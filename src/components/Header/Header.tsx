import defaultAvatar from "src/assets/Avatar.png";
import useData from "src/hooks/useReduce";
import { Container, User, UserImg, UserText, UserTitle } from "src/components/Header/Header.styled";
import { URLS } from "src/utils/getData.type";

function Header() {
  const data = useData(URLS.SHARED_FOLDERNAME);

  return (
    <Container>
      <User>
        {data?.path === URLS.SHARED_FOLDERNAME ? (
          <>
            <UserImg src={data.owner.profileImageSource ?? defaultAvatar} alt="유저 프로필 이미지" />
            <UserText>{data.owner.name}</UserText>
            <UserTitle>{data.folderName}</UserTitle>
          </>
        ) : (
          <p>폴더 정보를 읽어오는 데 실패했습니다.</p>
        )}
      </User>
    </Container>
  );
}

export default Header;
