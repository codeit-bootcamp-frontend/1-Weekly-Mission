import { useState } from 'react';
import * as S from './FolderList.style';
import addIcon from 'images/add.svg';
import addIconWhite from 'images/add_white.svg';
import Modal from 'components/Modal';
import useRequest from 'hooks/useRequest';
import ModalAddFolder from 'components/Modal/ModalAddFolder';
import CurrentFolderInfo from 'components/CurrentFolderInfo';

interface Data {
  data: Folder[];
}

interface Folder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: Link;
}

interface Link {
  count: number;
}

interface Props {
  getFolderId: (folderId: string) => void;
}

function FolderList({ getFolderId }: Props) {
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const [selectedName, setSelectedName] = useState('전체');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { data } = useRequest<Data>({ options: { url: '/users/1/folders' } });
  const folders = data?.data;

  const handleAllClick = () => {
    getFolderId('');
    setSelectedId(null);
    setSelectedName('전체');
  };

  const handleClick = (id: number, name: string) => {
    getFolderId(String(id));
    setSelectedId(String(id));
    setSelectedName(name);
  };

  return (
    <>
      {folders && (
        <S.FolderListContainer>
          <S.FolderContainer>
            <S.Folder
              onClick={handleAllClick}
              to='/folder'
              selected={!selectedId}>
              전체
            </S.Folder>
            {folders.map((folder) => (
              <S.Folder
                onClick={() => handleClick(folder.id, folder.name)}
                id={String(folder.id)}
                to={`/folder?folderId=${folder.id}`}
                key={folder.id}
                selected={selectedId ? +selectedId === folder.id : false}>
                {folder.name}
              </S.Folder>
            ))}
          </S.FolderContainer>
          <S.AddFolderButton onClick={() => setModalIsOpen(true)}>
            <span>폴더 추가</span>
            <img className='notMobile' src={addIcon} alt='추가 아이콘' />
            <img className='onMobile' src={addIconWhite} alt='추가 아이콘' />
          </S.AddFolderButton>
          {modalIsOpen && (
            <Modal close={() => setModalIsOpen(false)}>
              <ModalAddFolder />
            </Modal>
          )}
        </S.FolderListContainer>
      )}
      <CurrentFolderInfo selectedName={selectedName} selectedId={selectedId} />
    </>
  );
}

export default FolderList;
