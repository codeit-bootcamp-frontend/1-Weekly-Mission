import CardList from 'components/CardList/CardList';
import FolderList from 'components/FolderList/FolderList';
import FunctionButton from 'components/FunctionButton/FunctionButton';
import LinkAdd from 'components/LinkAdd/LinkAdd';
import MainSection from 'components/MainSection/MainSection';
import Modal from 'components/Modal/Modal';
import NotFoundLink from 'components/NotFoundLink/NotFoundLink';
import Search from 'components/Search/Search';
import Title from 'components/Title/Title';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllFolder, getFolderLinks, getUserFolder } from 'services/api';
import isEmpty from 'utils/isEmpty';

function Folder() {
  const [folders, setFolders] = useState(null);
  const [isFunctionButtonShow, setIsFunctionButtonShow] = useState(false);
  const [cards, setCards] = useState([]);
  const [folderName, setFolderName] = useState('');
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalButtonContent, setModalButtonContent] = useState('');

  const [folderParams, setFolderParams] = useSearchParams(); // setFolderParams 이걸 뭘로 해야될까요... useSearchParams에 대한 공부가 아직 더 필요한..
  const initFolderId = folderParams.get('folderId');

  const folderInfo = async (folderId) => {
    const introResult = await getUserFolder();
    if (!introResult) return;

    const currentId = introResult.filter((data) => data.id === Number(folderId));

    let folderName;
    if (currentId.length === 0) {
      folderName = '전체';
      setIsFunctionButtonShow(false);
    } else {
      folderName = currentId[0].name;
      setIsFunctionButtonShow(true);
    }

    setFolderName(folderName);
    setFolders(introResult);
  };

  const cardInfo = async (folderId) => {
    const introResult = isEmpty(folderId) ? await getAllFolder() : await getFolderLinks(folderId);
    if (!introResult) return;

    setCards(introResult);
  };

  const handleModal = (e) => {
    const buttonName = e.target.value;
    switch (buttonName) {
      case 'add':
      case 'addFolder':
        setModalTitle('폴더에 추가');
        setModalButtonContent('추가하기');
        break;
      case 'share':
        setModalTitle('폴더 공유');
        break;
      case 'edit':
        setModalTitle('폴더 이름 변경');
        setModalButtonContent('변경하기');
        break;
      case 'delete':
        setModalTitle('폴더 삭제');
        setModalButtonContent('삭제하기');
        break;
      default:
        setModalTitle('');
    }
    setModalIsOpen(!isModalOpen);
  };

  useEffect(() => {
    folderInfo(initFolderId);
    cardInfo(initFolderId);
    return setCards([]);
  }, [initFolderId]);

  return (
    <>
      {isModalOpen && <Modal title={modalTitle} buttonContent={modalButtonContent} onClick={handleModal} />}
      <LinkAdd onClick={handleModal} />
      <MainSection>
        <Search />
        {folders && <FolderList folder={folders} onClick={handleModal} />}
        <Title folderName={folderName}>
          {isFunctionButtonShow && <FunctionButton folderName={folderName} onClick={handleModal} />}
        </Title>
        {initFolderId && cards.length === 0 ? <NotFoundLink /> : <CardList card={cards} isCardEditable={true} />}
      </MainSection>
    </>
  );
}

export default Folder;
