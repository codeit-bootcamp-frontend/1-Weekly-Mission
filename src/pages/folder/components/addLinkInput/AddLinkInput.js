import React, { useState } from 'react';
import './addLinkInput.css';
import useModal from '../../../../hooks/useModal';

import linkIcon from '../../../../assets/folder/link.svg';

export default function addLinkInput({ folders }) {
  const [url, setUrl] = useState('');
  const { open, close, Dialog, isModalOpen } = useModal();

  const handleInputValue = (e) => {
    setUrl(e.target.value);
  };

  return (
    <form className="add-link-input-container">
      <img src={linkIcon} alt="link-icon" className="add-link-icon" />
      <input
        name="add-link"
        placeholder="링크를 추가해 보세요"
        className="add-link-input"
        onChange={handleInputValue}
      />
      <button type="button" className="add-link-button" onClick={open}>
        추가하기
      </button>
      <Dialog onClick={close} isModalOpen={isModalOpen}>
        <Dialog.Title>폴더에 추가</Dialog.Title>
        <Dialog.Link>{url}</Dialog.Link>
        {folders.map((folder) => (
          <Dialog.FolderList key={folder.id}>
            <span className="dialog-folder-name">{folder.name}</span>
            <span className="dialog-folder-count">
              {folder.link.count}개 링크
            </span>
          </Dialog.FolderList>
        ))}
        <Dialog.Button>
          <button type="button" className="dialog-add-button">
            추가하기
          </button>
        </Dialog.Button>
      </Dialog>
    </form>
  );
}
