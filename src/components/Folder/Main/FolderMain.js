import styled from 'styled-components';
import { useEffect, useContext, useState } from 'react';
import CardList from './CardList';
import FolderHeader from './FolderHeader';
import LinkSearchInput from '../../UI/LinkSearchInput';
import Option from '../../UI/Option';
import shareIcon from '../../../assets/share_icon.svg';
import penIcon from '../../../assets/pen_icon.svg';
import deleteIcon from '../../../assets/delete_icon.svg';
import { FolderContext } from '../../../context/FolderContext';
import useGetSearchFolder from '../../../hooks/useGetSearchFolder';

const FolderMain = ({ selectedFolder, userID }) => {
  const { folderId, changeFolderId } = useContext(FolderContext);
  const folderContentsInfo = useGetSearchFolder(userID, folderId);

  const checkEmptyFolder = folderContentsInfo?.data.length;
  const [title, setTitle] = useState('전체');

  const changeTitle = (name) => {
    setTitle(name);
  };

  useEffect(() => {
    changeFolderId(folderId);
  }, []);

  return (
    <Container>
      <LinkSearchInput />
      <FolderHeader selectedFolder={selectedFolder} userID={userID} changeTitle={changeTitle} />
      <Title>
        <h1>{title}</h1>
        {folderId > 0 && checkEmptyFolder > 0 && (
          <Options>
            <Option icon={shareIcon} modal={'폴더 공유'}>
              공유
            </Option>
            <Option icon={penIcon} modal={'폴더 이름 변경'}>
              이름 변경
            </Option>
            <Option icon={deleteIcon} modal={'폴더 삭제'}>
              삭제
            </Option>
          </Options>
        )}
      </Title>
      {folderContentsInfo && <CardList folderCards={folderContentsInfo.data} />}
    </Container>
  );
};

export default FolderMain;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  margin-top: 2.4rem;
  width: 100%;

  @media (max-width: 1124px) {
    padding: 0 3.2rem;
  }

  @media (max-width: 779px) {
    padding: 0 3.2rem;
    gap: 3.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled.div`
  display: flex;
  width: 1060px;
  height: 2.9rem;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: -0.02rem;
  }

  @media (max-width: 1124px) {
    width: calc(100vw - 6.4rem);
  }
`;

const Options = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;
