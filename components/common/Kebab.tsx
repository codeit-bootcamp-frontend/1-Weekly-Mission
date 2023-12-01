import { useState } from 'react';
import KebabPopup from './Modal/KebabPopup';
import DeleteModal from './Modal/DeleteModal';
import ModalPortal from './Modal/ModalPortal';
import AddToFolderModal from './Modal/AddToFolderModal';
import kebabIcon from '@/public/assets/images/kebab.svg';
import useModal from '@/hooks/useModal';
import { MouseEvent } from 'react';
import Image from 'next/image';

interface Props {
  url: string;
}

function Kebab({ url }: Props) {
  const [popup, setPopup] = useState(false);
  const [modal, setModal] = useState('');
  const { isOpen, handleModalOpen, handleModalClose } = useModal();

  function handlePopupOpen(event: MouseEvent): void {
    event.preventDefault();
    setPopup(!popup);
  }

  function handleModalClick(type: string): void {
    setModal(type);
    handleModalOpen();
  }

  return (
    <>
      <div onClick={handlePopupOpen}>
        <Image src={kebabIcon} alt="kebab" />
        {popup && <KebabPopup onOpenDelete={() => handleModalClick('delete')} onOpenFolderAdd={() => handleModalClick('add')} />}
      </div>
      {isOpen && (
        <ModalPortal>
          {modal === 'delete' && <DeleteModal title="링크 삭제" data={url} onClickClose={() => handleModalClose()} />}
          {modal === 'add' && <AddToFolderModal url={url} onClickClose={() => handleModalClose()} />}
        </ModalPortal>
      )}
    </>
  );
}

export default Kebab;
