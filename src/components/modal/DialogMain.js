import React, { Children, isValidElement } from 'react';
import './dialogMain.css';
import { createPortal } from 'react-dom';
import DialogLink from './components/dialogLink/DialogLink';
import DialogTitle from './components/dialogTitle/DialogTitle';
import DialogFolderList from './components/dialogFolderList/DialogFolderList';

import modalCloseButton from '../../assets/folder/modalCloseBtn.svg';

const DialogTitleType = (<DialogTitle />).type;
const DialogLinkType = (<DialogLink />).type;
const DialogFolderListType = (<DialogFolderList />).type;

function getDialogTitle(children) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === DialogTitleType)
    .slice(0, 2);
}

function getDialogLink(children) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === DialogLinkType)
    .slice(0, 2);
}

function getDialogFolderList(children) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === DialogFolderListType,
  );
}

export function DialogMain({ children, isModalOpen, onClick }) {
  if (!isModalOpen) {
    return null;
  }
  const portalElement = document.getElementById('modal');
  const dialogTitle = getDialogTitle(children);
  const dialogLink = getDialogLink(children);
  const dialogFolderList = getDialogFolderList(children);

  return createPortal(
    <div className="dialog" role="none">
      <div
        role="none"
        className="dialog-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClick} className="dialog-close-button" type="button">
          <img src={modalCloseButton} alt="dialog-close-button" />
        </button>
        <header className="dialog-header">
          {dialogTitle && <div>{dialogTitle}</div>}
          {dialogLink && <div>{dialogLink}</div>}
        </header>
        <div className="dialog-folder-list">
          {dialogFolderList && <div>{dialogFolderList}</div>}
        </div>
      </div>
    </div>,
    portalElement,
  );
}

export const Dialog = Object.assign(DialogMain, {
  Title: DialogTitle,
  Link: DialogLink,
  FolderList: DialogFolderList,
});
