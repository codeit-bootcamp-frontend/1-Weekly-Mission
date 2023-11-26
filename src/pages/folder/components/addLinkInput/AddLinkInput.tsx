/* eslint-disable react-hooks/rules-of-hooks */
import React, { ChangeEvent, useState } from "react";
import "./addLinkInput.css";
import useModal from "../../../../hooks/useModal";

import linkIcon from "../../../../assets/folder/link.svg";
import { FolderName } from "../../../../types/types";

interface AddLinkInputProps {
  folders: FolderName[];
}

export default function addLinkInput({ folders }: AddLinkInputProps) {
  const [url, setUrl] = useState("");
  const { open, close, Dialog, isModalOpen } = useModal();

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
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
        <Dialog.Button isAddButton>추가하기</Dialog.Button>
      </Dialog>
    </form>
  );
}
