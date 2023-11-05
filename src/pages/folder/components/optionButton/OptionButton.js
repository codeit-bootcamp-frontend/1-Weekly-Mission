import React from 'react';
import './optionButton.css';
import useModal from '../../../../hooks/useModal';

export default function OptionButton({
  iconSrc,
  name,
  alt,
  folderName,
  folderId,
}) {
  const { open, close, Dialog, isModalOpen } = useModal();

  return (
    <div className="option-icon-container" onClick={open} role="none">
      {name === '공유' ? (
        <Dialog isModalOpen={isModalOpen} onClick={close}>
          <Dialog.Title>폴더 공유</Dialog.Title>
          <Dialog.Link>{folderName}</Dialog.Link>
          <Dialog.IconsBox folderId={folderId} />
        </Dialog>
      ) : null}
      {name === '이름 변경' ? (
        <Dialog isModalOpen={isModalOpen} onClick={close}>
          <Dialog.Title>폴더 이름 변경</Dialog.Title>
          <Dialog.Input value={folderName} />
          <Dialog.Button isAddButton>변경하기</Dialog.Button>
        </Dialog>
      ) : null}
      {name === '삭제' ? (
        <Dialog isModalOpen={isModalOpen} onClick={close}>
          <Dialog.Title>폴더 삭제</Dialog.Title>
          <Dialog.Link>{folderName}</Dialog.Link>
          <Dialog.Button>삭제하기</Dialog.Button>
        </Dialog>
      ) : null}
      <img src={iconSrc} alt={alt} role="none" />
      <span>{name}</span>
    </div>
  );
}
