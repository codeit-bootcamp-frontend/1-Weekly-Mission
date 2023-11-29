import styled from "styled-components";

interface Owner {
  profileImageSource: string;
  name: string;
}

interface HeaderProps {
  folder: {
    owner: Owner;
    name: string;
  };
}

const Header = ({ folder }: HeaderProps) => {
  const { owner, name } = folder;

  return (
    <Container>
      <Wrapper>
        <UserInfo>
          <UserProfile>
            <OwnerImg src={owner?.profileImageSource} alt="프로필 사진" />
            <OwnerName>{owner?.name}</OwnerName>
          </UserProfile>
          <FolderName>{name}</FolderName>
        </UserInfo>
      </Wrapper>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const Wrapper = styled.div`
  padding: 2rem 62.4rem 6rem 62.4rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 20rem;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const OwnerImg = styled.img`
  width: 60px;
`;

const OwnerName = styled.div`
  color: var(--linkbrary-black);
  font-size: 1.6rem;
  line-height: 2.4rem; /* 150% */
`;

const FolderName = styled.div`
  color: var(--linkbrary-black);
  text-align: center;
  font-size: 4rem;
  font-weight: 600;
`;

export default Header;
