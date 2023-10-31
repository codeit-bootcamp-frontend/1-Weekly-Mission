import styled from 'styled-components';

const INIT_FOLDER_INFO = {
  id: 0,
  name: '',
  owner: {
    id: 0,
    name: '',
    profileImageSource: '',
  },
};
export default function User({ folderInfo }) {
  const folder = folderInfo ? folderInfo : INIT_FOLDER_INFO;

  return (
    <Container className='user'>
      <Img
        src={folder.owner.profileImageSource}
        className='folder-profile-image'
        alt='프로필 이미지'
      />
      <UserName className='user-name'>@{folder.owner.name}</UserName>
      <FolderName className='user-folder-name'>{folder.name}</FolderName>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 60px;
  background: var(--linkbrary-bg, #f0f6ff);
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;

const FolderName = styled.div`
  font-size: 40px;
  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

const UserName = styled.div`
  margin: 12px 0 20px;
`;
