import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";
import { AddFolderButton } from "folder/ui-add-folder-button";
import { FolderButton } from "folder/ui-folder-button";
import { IconAndTextButton } from "sharing/ui-icon-and-text-button";
import {
  ALL_LINKS_TEXT,
  BUTTONS,
  KAKAO_SHARE_DATA,
  MODALS_ID,
} from "./constant";
import { ALL_LINKS_ID } from "link/data-access-link/constant";
import { useState } from "react";
import { ShareModal } from "folder/ui-share-modal";
import { InputModal } from "sharing/ui-input-modal";
import { AlertModal } from "sharing/ui-alert-modal";
import { copyToClipboard } from "sharing/util/copyToClipboard";
import { useKakaoSdk } from "sharing/util/useKakaoSdk";

const cx = classNames.bind(styles);

interface Folder {
  id: string;
  name: string;
}

interface FolderToolBarProps {
  folders: Folder[];
  selectedFolderId: string;
  onFolderClick: (folderId: string) => void;
}

export const FolderToolBar = ({
  folders,
  selectedFolderId,
  onFolderClick,
}: FolderToolBarProps) => {
  const { shareKakao } = useKakaoSdk();
  const [currentModal, setCurrentModal] = useState<null | string>(null);
  const [someValue, setSomeValue] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSomeValue(event.target.value);
  };

  const folderName =
    ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folders?.find(({ id }) => id === selectedFolderId)?.name ?? "";
  const shareLink = `${window.location.origin}/shared?user=1&folder=${selectedFolderId}`;

  const closeModal = () => setCurrentModal(null);
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
  const handleKakaoClick = () => {
    shareKakao({ url: shareLink, ...KAKAO_SHARE_DATA });
  };
  const handleFacebookClick = () =>
    window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);
  const handleLinkCopyClick = () => copyToClipboard(shareLink);

  return (
    <div className={cx("container")}>
      <div className={cx("folders")}>
        <FolderButton
          key={ALL_LINKS_ID}
          text={ALL_LINKS_TEXT}
          onClick={() => onFolderClick(ALL_LINKS_ID)}
          isSelected={ALL_LINKS_ID === selectedFolderId}
        />
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => onFolderClick(id)}
            isSelected={id === selectedFolderId}
          />
        ))}
      </div>
      <div className={cx("add-button")}>
        <AddFolderButton onClick={() => setCurrentModal(MODALS_ID.addFolder)} />
        <InputModal
          isOpen={currentModal === MODALS_ID.addFolder}
          title="폴더 추가"
          placeholder="내용 입력"
          buttonText="추가하기"
          onCloseClick={closeModal}
          onKeyDown={handleKeyDown}
          value={someValue}
          onChange={handleInputChange}
        />
      </div>
      <h2 className={cx("folder-name")}>{folderName}</h2>
      {selectedFolderId !== ALL_LINKS_ID && (
        <div className={cx("buttons")}>
          {BUTTONS.map(({ text, iconSource, modalId }) => (
            <IconAndTextButton
              key={text}
              iconSource={iconSource}
              onClick={() => setCurrentModal(modalId)}
              text="버튼 텍스트"
            />
          ))}
          <ShareModal
            isOpen={currentModal === MODALS_ID.share}
            folderName={folderName}
            onKakaoClick={handleKakaoClick}
            onFacebookClick={handleFacebookClick}
            onLinkCopyClick={handleLinkCopyClick}
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
          <InputModal
            isOpen={currentModal === MODALS_ID.rename}
            title="폴더 이름 변경"
            placeholder="내용 입력"
            buttonText="변경하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
            value={someValue}
            onChange={handleInputChange}
          />
          <AlertModal
            isOpen={currentModal === MODALS_ID.delete}
            title="폴더 삭제"
            description={folderName}
            buttonText="삭제하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
            onClick={closeModal}
          />
        </div>
      )}
    </div>
  );
};
