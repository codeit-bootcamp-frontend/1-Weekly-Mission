import styles from "./AddLinkModal.module.scss";
import classNames from "classnames/bind";
import { FolderItem } from "folder/ui-folder-item";
import { Modal } from "sharing/ui-modal";
import { ModalContentBox } from "sharing/ui-modal-content-box";
import { ModalContentButton } from "sharing/ui-modal-content-button";
import { ModalContentDescription } from "sharing/ui-modal-content-description";
import { ModalContentTitle } from "sharing/ui-modal-content-title";
import { KeyboardEvent, MouseEvent, SetStateAction } from "react";

const cx = classNames.bind(styles);

interface FoldersValue {
  id: number;
  name: string;
  link: {
    count: number;
  };
}

interface AddLinkModalValue {
  folders: FoldersValue[];
  isOpen: boolean;
  selectedLinkUrl?: string | null;
  selectedFolderId: number | null;
  setSelectedFolderId: (id: SetStateAction<number | null>) => void;
}

interface AddLinkModalProps extends AddLinkModalValue {
  onAddClick: (event: MouseEvent) => void;
  onCloseClick: (event: MouseEvent) => void;
  onKeyDown: (event: KeyboardEvent) => void;
}

export const AddLinkModal = ({
  isOpen,
  folders,
  selectedLinkUrl,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}: AddLinkModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>폴더에 추가</ModalContentTitle>
            <ModalContentDescription>{selectedLinkUrl}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <div className={cx("folder-list")}>
              {folders?.map(({ id, name, link }: FoldersValue) => (
                <FolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={link?.count}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </div>
            <ModalContentButton onClick={onAddClick}>
              추가하기
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
