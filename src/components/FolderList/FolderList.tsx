import { useState } from 'react';
import * as S from './FolderList.style';
import Modal from '@components/Modal';
import ModalAddFolder from '@components/Modal/ModalAddFolder';
import CurrentFolderInfo from '@components/CurrentFolderInfo';
import Link from 'next/link';
import { Folder } from '@pages/folder';

interface Props {
  folders: Folder[];
}

function FolderList({ folders }: Props) {
  const [selectedId, setSelectedId] = useState<string | undefined>('');
  const [selectedName, setSelectedName] = useState('전체');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAllClick = () => {
    setSelectedId('');
    setSelectedName('전체');
  };

  const handleClick = (id: number, name: string) => {
    setSelectedId(String(id));
    setSelectedName(name);
  };

  return (
    <>
      {folders && (
        <S.FolderListContainer>
          <S.FolderContainer>
            <Link href='/folder'>
              <S.Folder onClick={handleAllClick} selected={!selectedId}>
                전체
              </S.Folder>
            </Link>
            {folders?.map((folder) => (
              <Link href={`/folder?folderId=${folder.id}`} key={folder.id}>
                <S.Folder
                  onClick={() => handleClick(folder.id, folder.name)}
                  id={String(folder.id)}
                  selected={selectedId ? +selectedId === folder.id : false}>
                  {folder.name}
                </S.Folder>
              </Link>
            ))}
          </S.FolderContainer>
          <S.AddFolderButton onClick={() => setModalIsOpen(true)}>
            <span>폴더 추가</span>
            <img
              className='notMobile'
              src='/assets/images/add.svg'
              alt='추가 아이콘'
            />
            <img
              className='onMobile'
              src='/assets/images/add_white.svg'
              alt='추가 아이콘'
            />
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
