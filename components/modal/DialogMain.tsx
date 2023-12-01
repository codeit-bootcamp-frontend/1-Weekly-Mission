import { Children, ReactNode, isValidElement, useEffect, useRef } from "react";
import styles from "./dialogMain.module.css";
import { createPortal } from "react-dom";
import DialogLink from "./components/dialogLink/DialogLink";
import DialogTitle from "./components/dialogTitle/DialogTitle";
import DialogFolderList from "./components/dialogFolderList/DialogFolderList";
import modalCloseButton from "@/public/icons/modalCloseBtn.svg";
import DialogButton from "./components/dialogButton/DialogButton";
import DialogInput from "./components/dialogInput/DialogInput";
import DialogIconsBox from "./components/dialogIconsBox/DialogIconsBox";
import Image from "next/image";

const DialogTitleType = (<DialogTitle />).type;
const DialogLinkType = (<DialogLink />).type;
const DialogFolderListType = (<DialogFolderList />).type;
const DialogButtonType = (<DialogButton />).type;
const DialogInputType = (<DialogInput />).type;
const DialogIconsBoxType = (<DialogIconsBox />).type;

function getDialogTitle(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === DialogTitleType)
    .slice(0, 2);
}

function getDialogLink(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === DialogLinkType)
    .slice(0, 2);
}

function getDialogFolderList(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) => isValidElement(child) && child.type === DialogFolderListType
    )
    .slice(0, 10);
}

function getDialogButton(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === DialogButtonType)
    .slice(0, 2);
}

function getDialogInput(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === DialogInputType)
    .slice(0, 2);
}

function getDialogIconsBox(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter(
    (child) => isValidElement(child) && child.type === DialogIconsBoxType
  );
}

interface DialogMainProps {
  children?: ReactNode;
  isModalOpen: boolean;
  onClick: () => void;
}

export function DialogMain({
  children,
  isModalOpen,
  onClick,
}: DialogMainProps) {
  const dialogTitle = getDialogTitle(children);
  const dialogLink = getDialogLink(children);
  const dialogFolderList = getDialogFolderList(children);
  const dialogButton = getDialogButton(children);
  const dialogInput = getDialogInput(children);
  const dialogIconsBox = getDialogIconsBox(children);
  const portalElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    portalElementRef.current = document.createElement("div");
    document.body.appendChild(portalElementRef.current);
    return () => {
      if (portalElementRef.current) {
        document.body.removeChild(portalElementRef.current);
      }
    };
  }, []);

  return isModalOpen
    ? createPortal(
        <div className={styles.dialog} role="none">
          <div
            role="none"
            className={styles.dialogContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClick}
              className={styles.dialogCloseButton}
              type="button"
            >
              <Image
                src={modalCloseButton}
                alt="dialog-close-button"
                width={24}
                height={24}
              />
            </button>
            <header className={styles.dialogHeader}>
              {dialogTitle && <div>{dialogTitle}</div>}
              {dialogLink && <div>{dialogLink}</div>}
            </header>
            <div className={styles.dialogInput}>
              {dialogInput && <div>{dialogInput}</div>}
            </div>
            <div>{dialogIconsBox && <div>{dialogIconsBox}</div>}</div>
            <div className={styles.dialogFolderList}>
              {dialogFolderList && <div>{dialogFolderList}</div>}
            </div>
            <div className={styles.dialogButton}>
              {dialogButton && <div>{dialogButton}</div>}
            </div>
          </div>
        </div>,
        portalElementRef.current!
      )
    : null;
}

export const Dialog = Object.assign(DialogMain, {
  Title: DialogTitle,
  Link: DialogLink,
  FolderList: DialogFolderList,
  Button: DialogButton,
  Input: DialogInput,
  IconsBox: DialogIconsBox,
});
