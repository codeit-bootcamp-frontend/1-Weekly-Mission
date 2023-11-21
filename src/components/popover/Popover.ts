import React, { useState } from 'react';
import './popover.css';
import useModal from '../../hooks/useModal';
import POPOVER_MENU from './constant';

export default function Popover({ url }) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const { open: openModal, close, isModalOpen, Dialog, folders } = useModal();

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
    openModal();
  };

  const openAddModal = () => {
    setAddModalOpen(true);
    openModal();
  };

  return (
    <ul className="popover">
      {POPOVER_MENU.map((menu) => (
        <li
          key={menu.id}
          onClick={menu.id === 1 ? openDeleteModal : openAddModal}
          role="none"
        >
          {menu.name}
          {menu.id === 1 && deleteModalOpen ? (
            <Dialog
              onClick={() => {
                close();
                setDeleteModalOpen(false);
              }}
              isModalOpen={isModalOpen}
            >
              <Dialog.Title>링크 삭제</Dialog.Title>
              <Dialog.Link>{url}</Dialog.Link>
              <Dialog.Button>삭제하기</Dialog.Button>
            </Dialog>
          ) : null}
          {menu.id === 2 && addModalOpen ? (
            <Dialog
              onClick={() => {
                close();
                setAddModalOpen(false);
              }}
              isModalOpen={isModalOpen}
            >
              <Dialog.Title>폴더에 추가</Dialog.Title>
              <Dialog.Link>{url}</Dialog.Link>
              {folders?.map((folder) => (
                <Dialog.FolderList key={folder.id}>
                  <span className="dialog-folder-name">{folder.name}</span>
                  <span className="dialog-folder-count">
                    {folder.link.count}개 링크
                  </span>
                </Dialog.FolderList>
              ))}
              <Dialog.Button isAddButton>추가하기</Dialog.Button>
            </Dialog>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
