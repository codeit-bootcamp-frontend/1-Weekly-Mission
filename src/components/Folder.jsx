import styled from 'styled-components';
import CardList from './CardList';
import { useEffect, useState } from 'react';
import { getCards } from '../api/api';
import FolderButton from './FolderButton';
import OptionBtn from './OptionBtn';
import IconShare from '../assets/icon/icon-share.svg';
import IconPen from '../assets/icon/icon-pen.svg';
import IconTrash from '../assets/icon/icon-trash.svg';
import ShareFolderModal from './Modal/ShareFolderModal';
import RenameFolderModal from './Modal/RenameFolderModal';
import RemoveFolderModal from './Modal/RemoveFolderModal';
import RemoveLinkModal from './Modal/RemoveLinkModal';
import InsertFolderModal from './Modal/InsertFolderModal';

const INITIAL_FOLDER = {
  id: '',
  name: '전체',
};

function FolderList({ folderList = null, getCardList }) {
  const [folderName, setFolderName] = useState('전체');
  const [isFolderShareModal, setIsFolderShareModal] = useState(false);
  const [isFolderRenameModal, setIsFolderRenameModal] = useState(false);
  const [isFolderRemoveModal, setIsFolderRemoveModal] = useState(false);

  const handleButton = (name, id) => {
    setFolderName(name);
    getCardList(id);
  };

  return (
    <div>
      <FolderListContainer>
        <FolderButton folder={INITIAL_FOLDER} handleButton={handleButton} />
        {folderList && (
          <>
            {folderList.map((folder) => {
              return (
                <div key={folder.id}>
                  <FolderButton folder={folder} handleButton={handleButton} />
                </div>
              );
            })}
          </>
        )}
      </FolderListContainer>
      <FolderTitleContainer>
        <FolderTitle>{folderName}</FolderTitle>
        <Options>
          <OptionBtn src={IconShare} alt="공유" onClick={() => setIsFolderShareModal(true)}>
            공유
          </OptionBtn>
          <OptionBtn src={IconPen} alt="이름 변경" onClick={() => setIsFolderRenameModal(true)}>
            이름 변경
          </OptionBtn>
          <OptionBtn src={IconTrash} alt="삭제" onClick={() => setIsFolderRemoveModal(true)}>
            삭제
          </OptionBtn>
        </Options>
        {isFolderShareModal && <ShareFolderModal setIsFolderShareModal={setIsFolderShareModal} />}
        {isFolderRenameModal && <RenameFolderModal setIsFolderRenameModal={setIsFolderRenameModal} />}
        {isFolderRemoveModal && <RemoveFolderModal setIsFolderRemoveModal={setIsFolderRemoveModal} />}
      </FolderTitleContainer>
    </div>
  );
}

function Folder({ folderList = null }) {
  const [cards, setCards] = useState();
  const [isLinkRemoveModal, setIsLinkRemoveModal] = useState(false);
  const [isInsertFolderModal, setIsInsertFolderModal] = useState(false);

  const getCardList = async (id = '') => {
    const result = await getCards(id);
    setCards(() => {
      return [...result?.data];
    });
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <Container>
      <FolderList folderList={folderList} getCardList={getCardList} />
      <CardList cards={cards} />
      {isLinkRemoveModal && <RemoveLinkModal setIsLinkRemoveModal={setIsLinkRemoveModal} />}
      {isInsertFolderModal && <InsertFolderModal setIsInsertFolderModal={setIsInsertFolderModal} />}
    </Container>
  );
}

export default Folder;

const Container = styled.div`
  margin: 0rem 19rem;
  gap: 4rem;
`;

const FolderListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  margin-bottom: 2.4rem;

  @media (min-width: 768px) {
    width: 70.4rem;
  }

  @media (min-width: 1024px) {
    width: 106rem;
  }
`;

const FolderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--black);
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
  margin-bottom: 2rem;
`;

const FolderTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Options = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;
