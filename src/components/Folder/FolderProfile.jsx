import styled from 'styled-components';

function FolderProfile({ folderProfile }) {
  const avatarUrl = folderProfile?.avatarUrl ?? '';
  const ownerName = folderProfile?.ownerName ?? '';
  const folderName = folderProfile?.folderName ?? '';

  return (
    <HeaderBlock>
      <FolderProfileContainer>
        <FolderProfileStyle>
          <FolderAvatarImage src={avatarUrl} alt='폴더 주인 아바타' />
          <FolderOwnerName>{ownerName}</FolderOwnerName>
        </FolderProfileStyle>
        <FolderName>{folderName}</FolderName>
      </FolderProfileContainer>
    </HeaderBlock>
  );
}

export default FolderProfile;

const HeaderBlock = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #f0f6ff;
  padding: 1rem 10rem 4rem 10rem;

  @media (min-width: 768px) {
    padding: 2rem 29rem 6rem 29rem;
  }
`;

const FolderProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FolderProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;

  @media (min-width: 768px) {
    gap: 1.2rem;
  }
`

const FolderAvatarImage = styled.img`
  border-radius: 47px;
  width: 4rem;
  height: 4rem;

  @media (min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`

const FolderOwnerName = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`

const FolderName = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: -0.2px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;
