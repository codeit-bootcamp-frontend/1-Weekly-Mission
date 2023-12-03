import '@/styles/folder.module.css';
import CardList from './CardList';
import { useEffect, useState } from 'react';
import { getLinks } from '@/pages/api/api';
import FolderButton from './FolderButton';
import OptionBtn from './OptionBtn';
import PenIcon from '@/public/images/pen.svg';
import ShareIcon from '@/public/images/share.svg';
import TrashIcon from '@/public/images/trash.svg';

const INITIAL_FOLDER = {
  id: '',
  name: '전체',
};

function FolderList({ folderList = null, getCardList }): JSX.Element {
  const [folderName, setFolderName] = useState('전체');

  const handleButton = (name: string, id: string) => {
    setFolderName(name);
    getCardList(id);
  };

  return (
    <div>
      <div className="folderlist-container">
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
      </div>
      <div className="folder-title-container">
        <div className="folder-title">{folderName}</div>
        <div className="option-container">
          <OptionBtn src={ShareIcon} alt="공유">
            공유
          </OptionBtn>
          <OptionBtn src={PenIcon} alt="이름 변경">
            이름 변경
          </OptionBtn>
          <OptionBtn src={TrashIcon} alt="삭제">
            삭제
          </OptionBtn>
        </div>
      </div>
    </div>
  );
}

function Folder({ folderList = null }) {
  const [cards, setCards] = useState();

  const getCardList = async (id = '') => {
    const result = await getLinks(id);
    setCards(() => {
      return [...result?.data];
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="container">
      <FolderList folderList={folderList} getCardList={getCardList} />
      <CardList cards={cards} />
    </div>
  );
}

export default Folder;
