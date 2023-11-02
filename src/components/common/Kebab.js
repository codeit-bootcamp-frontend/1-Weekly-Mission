import { useState } from 'react';
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

  function handleDeleteOpen(event) {
    event.preventDefault();
    setDeleteModal(true);
  }

  function handleDeleteClose() {
    setDeleteModal(false);
  }

  function handleFolderAddOpen(event) {
    event.preventDefault();
    setFolderAddModal(true);
  }

  function handleFolderAddClose() {
    setFolderAddModal(false);
  }

  return (
    <>
      <div onClick={handlePopupOpen}>
        <img src={kebabIcon} alt="kebab" />
        {popup && <KebabPopup url={url} onOpenDelete={handleDeleteOpen} onOpenFolderAdd={handleFolderAddOpen} />}
      </div>
      <ModalPortal>
        {deleteModal && (
          <DeleteModal data={url} onClickClose={handleDeleteClose}>
            링크 삭제
          </DeleteModal>
        )}
        {folderAddModal && <AddToFolderModal url={url} onClickClose={handleFolderAddClose} />}
      </ModalPortal>
    </>
  );
}

export default Kebab;
