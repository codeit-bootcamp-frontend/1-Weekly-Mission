import { useState } from 'react';
import Modal from './Modal/Modal';
import KebabPopup from './Modal/KebabPopup';
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

  function handlePopupToggle(event: MouseEvent): void {
    event.preventDefault();
    setPopup(!popup);
  }

  function handleModalClick(type: string): void {
    setModal(type);
    handleModalOpen();
  }

  return (
    <>
      <div onClick={handlePopupToggle}>
        <Image src={kebabIcon} alt="kebab 아이콘" />
        {popup && <KebabPopup onOpenDelete={() => handleModalClick('delete')} onOpenFolderAdd={() => handleModalClick('add')} />}
      </div>
      {isOpen && (
        <>
          {modal === 'delete' && <Modal type="delete" title="링크 삭제" data={url} button="삭제하기" onClickClose={handleModalClose} />}
          {modal === 'add' && <Modal type="add" title="폴더에 추가" data={url} button="추가하기" onClickClose={handleModalClose} />}
        </>
      )}
    </>
  );
}

export default Kebab;
