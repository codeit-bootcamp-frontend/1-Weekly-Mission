import styles from "./AddLinkModal.module.scss";
import classNames from "classnames/bind";
import { Folder } from "folder/data-access-folder";
import { FolderItem } from "folder/ui-folder-item";
import { KeyboardEvent } from "react";
import { Modal } from "sharing/ui-modal";
import { ModalContentBox } from "sharing/ui-modal-content-box";
import { ModalContentButton } from "sharing/ui-modal-content-button";
import { ModalContentDescription } from "sharing/ui-modal-content-description";
import { ModalContentTitle } from "sharing/ui-modal-content-title";

interface AddLinkModalProps {
  isOpen: boolean;
  folders: Folder[];
  selectedLinkUrl?: string;
  selectedFolderId: number;
  setSelectedFolderId: (id: number) => void;
  onAddClick: () => void;
  onCloseClick: () => void;
  onKeyDown: (e: KeyboardEvent) => void;
}

const cx = classNames.bind(styles);

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
              {folders?.map(({ id, name, link }) => (
                <FolderItem
                  key={id}
                  isSelected={id === +selectedFolderId}
                  folderName={name}
                  linkCount={link?.count}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </div>
            <ModalContentButton onClick={onAddClick}>추가하기</ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
