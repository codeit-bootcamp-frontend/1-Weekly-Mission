import CardList from 'components/CardList/CardList';
import FolderList from 'components/FolderList/FolderList';
import FunctionButton from 'components/FunctionButton/FunctionButton';
import LinkAdd from 'components/LinkAdd/LinkAdd';
import MainSection from 'components/MainSection/MainSection';
import NotFoundLink from 'components/NotFoundLink/NotFoundLink';
import Search from 'components/Search/Search';
import Title from 'components/Title/Title';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllFolder, getFolderLinks, getUserFolder } from 'services/api';
import isEmpty from 'utils/isEmpty';

function Folder() {
  const [folders, setFolders] = useState(null);
  const [isFunctionButtonShow, setFunctionButtonShow] = useState(false);
  const [cards, setCards] = useState([]);
  const [folderName, setFolderName] = useState('');

  const [folderParams, setFolderParams] = useSearchParams(); // setFolderParams 이걸 뭘로 해야될까요... useSearchParams에 대한 공부가 아직 더 필요한..
  const initFolderId = folderParams.get('folderId');

  const folderInfo = async (folderId) => {
    const introResult = await getUserFolder();
    if (!introResult) return;

    const currentId = introResult.filter((data) => data.id === Number(folderId));

    let folderName;
    if (currentId.length === 0) {
      folderName = '전체';
      setFunctionButtonShow(false);
    } else {
      folderName = currentId[0].name;
      setFunctionButtonShow(true);
    }

    setFolderName(folderName);
    setFolders(introResult);
  };

  const cardInfo = async (folderId) => {
    const introResult = isEmpty(folderId) ? await getAllFolder() : await getFolderLinks(folderId);
    if (!introResult) return;

    setCards(introResult);
  };

  useEffect(() => {
    folderInfo(initFolderId);
    cardInfo(initFolderId);
    return setCards([]);
  }, [initFolderId]);

  return (
    <>
      <LinkAdd />
      <MainSection>
        <Search />
        {folders && <FolderList folder={folders} />}
        <Title folderName={folderName}>{isFunctionButtonShow && <FunctionButton folderName={folderName} />}</Title>
        {initFolderId && cards.length === 0 ? <NotFoundLink /> : <CardList card={cards} isCardEditable={true} />}
      </MainSection>
    </>
  );
}

export default Folder;
