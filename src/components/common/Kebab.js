import { useState } from 'react';
import { handleModalOpen, handleModalClose } from 'utils/handleModal.js';
import KebabPopup from './Modal/KebabPopup.js';
import DeleteModal from './Modal/DeleteModal.js';
import ModalPortal from './Modal/ModalPortal.js';
import AddToFolderModal from './Modal/AddToFolderModal';
import kebabIcon from 'assets/images/kebab.svg';

function Kebab({ url }) {
  const [popup, setPopup] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [folderAddModal, setFolderAddModal] = useState(false);

  function handlePopupOpen(event) {
    event.preventDefault();
    setPopup(!popup);
  }

  return (
    <>
      <div onClick={handlePopupOpen}>
        <img src={kebabIcon} alt="kebab" />
        {popup && <KebabPopup url={url} onOpenDelete={() => handleModalOpen(setDeleteModal)} onOpenFolderAdd={() => handleModalOpen(setFolderAddModal)} />}
      </div>
      <ModalPortal>
        {deleteModal && <DeleteModal title="링크 삭제" data={url} onClickClose={() => handleModalClose(setDeleteModal)} />}
        {folderAddModal && <AddToFolderModal url={url} onClickClose={() => handleModalClose(setFolderAddModal)} />}
      </ModalPortal>
    </>
  );
}

export default Kebab;
