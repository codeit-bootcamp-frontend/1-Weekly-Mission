import { useState } from 'react';
import KebabPopup from './Modal/KebabPopup.js';
import DeleteModal from './Modal/DeleteModal.js';
import ModalPortal from './Modal/ModalPortal.js';
import AddToFolderModal from './Modal/AddToFolderModal';
import kebabIcon from 'assets/images/kebab.svg';
import useModal from 'hooks/useModal.js';

function Kebab({ url }) {
  const [popup, setPopup] = useState(false);
  const [modal, setModal] = useState('');
  const { isOpen, handleModalOpen, handleModalClose } = useModal();

  function handlePopupOpen(event) {
    event.preventDefault();
    setPopup(!popup);
  }

  function handleModalClick(type) {
    setModal(type);
    handleModalOpen();
  }

  return (
    <>
      <div onClick={handlePopupOpen}>
        <img src={kebabIcon} alt="kebab" />
        {popup && <KebabPopup url={url} onOpenDelete={() => handleModalClick('delete')} onOpenFolderAdd={() => handleModalClick('add')} />}
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
