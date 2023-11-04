import React from 'react';
import './optionButton.css';
import useModal from '../../../../hooks/useModal';

export default function OptionButton({ iconSrc, name, alt }) {
  const { open, close, Dialog, isModalOpen } = useModal();

  return (
    <div className="option-icon-container" onClick={open} role="none">
      {name === '공유' ? (
        <Dialog isModalOpen={isModalOpen} close={close}>
          <Dialog.Title>폴더 공유</Dialog.Title>
          <Dialog.Link>폴더명</Dialog.Link>
        </Dialog>
      ) : null}
      <img src={iconSrc} alt={alt} role="none" />
      <span>{name}</span>
    </div>
  );
}
