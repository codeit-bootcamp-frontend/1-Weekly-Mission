import styled from "styled-components";

const Head = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0 6rem;
  background: var(--gray0);
`;

const OwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const ProfileImg = styled.img`
  display: flex;
  height: 6rem;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  @media (max-width: 767px) {
    height: 4rem;
    border-radius: 2rem;
  }
`;

const Name = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem; /* 150% */
  @media (max-width: 767px) {
    font-size: 1.4rem;
    line-height: normal; /* 150% */
  }
`;

const FolderTitle = styled.h1`
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 4rem;
  font-weight: 600;
  margin: 0;
  @media (max-width: 767px) {
    font-size: 3.2rem;
  }
`;

const Header = ({ folderInfo }) => {
  const { folderTitle, owner } = folderInfo;
  const { profileImageSource, name } = owner;

  return (
    <Head>
      <OwnerInfo>
        <ProfileImg src={profileImageSource} alt="폴더 제작자 프로필 이미지" />
        <Name>{name}</Name>
      </OwnerInfo>
      <FolderTitle>{folderTitle}</FolderTitle>
    </Head>
  );
};

export default Header;
