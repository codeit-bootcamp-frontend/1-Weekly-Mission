import styled from 'styled-components';

function SharedProfile({ sharedProfile }) {
  const avatarUrl = sharedProfile?.avatarUrl ?? '';
  const ownerName = sharedProfile?.ownerName ?? '';
  const folderName = sharedProfile?.folderName ?? '';

  return (
    <HeaderBlock>
      <SharedProfileContainer>
        <SharedProfileStyle>
          <SharedAvatarImage src={avatarUrl} alt='폴더 주인 아바타' />
          <SharedOwnerName>{ownerName}</SharedOwnerName>
        </SharedProfileStyle>
        <FolderName>{folderName}</FolderName>
      </SharedProfileContainer>
    </HeaderBlock>
  );
}

export default SharedProfile;

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

const SharedProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SharedProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;

  @media (min-width: 768px) {
    gap: 1.2rem;
  }
`

const SharedAvatarImage = styled.img`
  border-radius: 47px;
  width: 4rem;
  height: 4rem;

  @media (min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`

const SharedOwnerName = styled.h3`
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
