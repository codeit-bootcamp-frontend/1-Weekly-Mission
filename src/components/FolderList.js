import styled from 'styled-components';
import addImg from '../assets/images/add.svg';

const AddFoler = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--linkbrary-primary-color);
  flex-shrink: 0;
  height: 35px;
  margin-left: 12px;
`;

const Box = styled.div`
  display: flex;
  max-width: 1060px;
  margin: auto;
  justify-content: space-between;
  align-items: flex-start;
`;

const Button = styled.button`
  background-color: var(--linkbrary-white);
  border: 1px solid var(--linkbrary-primary-color);
  padding: 8px 12px;
  border-radius: 5px;
  line-height: 100%;
  display: flex;
  flex-shrink: 0;
`;

const FolderBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ALL = {
  name: '전체',
};

const Folder = ({ folderInfo }) => {
  return <Button>{folderInfo.name}</Button>;
};

export default function FolderList({ userFolder }) {
  return (
    <Box>
      <FolderBox>
        <Folder folderInfo={ALL} />
        {userFolder.map((folder) => (
          <Folder folderInfo={folder} key={folder.id} id={folder.id} />
        ))}
      </FolderBox>
      <AddFoler>
        <div>폴더추가</div>
        <img src={addImg} alt='폴더추가' />
      </AddFoler>
    </Box>
  );
}
