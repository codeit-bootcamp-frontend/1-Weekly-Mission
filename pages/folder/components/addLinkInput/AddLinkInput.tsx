import React, { ChangeEvent, useState } from "react";
import styles from "./addLinkInput.module.css";
import useModal from "@/hooks/useModal";

import linkIcon from "@/public/icons/link.svg";
import { FolderName } from "@/types/types";
import Image from "next/image";

interface AddLinkInputProps {
  folders: FolderName[];
}

export default function AddLinkInput({ folders }: AddLinkInputProps) {
  const [url, setUrl] = useState("");
  const { open, close, Dialog, isModalOpen } = useModal();

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <form className={styles.addLinkInputContainer}>
      <Image
        src={linkIcon}
        alt="link-icon"
        className={styles.addLinkIcon}
        width={24}
        height={24}
      />
      <input
        name="add-link"
        placeholder="링크를 추가해 보세요"
        className={styles.addLinkInput}
        onChange={handleInputValue}
      />
      <button type="button" className={styles.addLinkButton} onClick={open}>
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
