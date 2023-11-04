import React, { Children, isValidElement } from 'react';
import './dialogMain.css';
import { createPortal } from 'react-dom';
import DialogLink from './components/dialogLink/DialogLink';
import DialogTitle from './components/dialogTitle/DialogTitle';
import DialogFolderList from './components/dialogFolderList/DialogFolderList';

import modalCloseButton from '../../assets/folder/modalCloseBtn.svg';
import DialogButton from './components/dialogButton/DialogButton';
import DialogInput from './components/dialogInput/DialogInput';

const DialogTitleType = (<DialogTitle />).type;
const DialogLinkType = (<DialogLink />).type;
const DialogFolderListType = (<DialogFolderList />).type;
const DialogButtonType = (<DialogButton />).type;
const DialogInputType = (<DialogInput />).type;

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

function getDialogButton(children) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === DialogButtonType)
    .slice(0, 2);
}

function getDialogInput(children) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === DialogInputType)
    .slice(0, 2);
}

export function DialogMain({ children, isModalOpen, onClick }) {
  if (!isModalOpen) {
    return null;
  }
  const portalElement = document.getElementById('modal');
  const dialogTitle = getDialogTitle(children);
  const dialogLink = getDialogLink(children);
  const dialogFolderList = getDialogFolderList(children);
  const dialogButton = getDialogButton(children);
  const dialogInput = getDialogInput(children);

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
        <div className="dialog-Input">
          {dialogInput && <div>{dialogInput}</div>}
        </div>
        <div className="dialog-folder-list">
          {dialogFolderList && <div>{dialogFolderList}</div>}
        </div>
        <div className="dialog-button">
          {dialogButton && <div>{dialogButton}</div>}
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
  Button: DialogButton,
  Input: DialogInput,
});
