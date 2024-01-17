import styles from "./AlertModal.module.scss";
import classNames from "classnames/bind";
import {
  Dispatch,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { Modal } from "@/src/sharing/ui-modal";
import { ModalContentBox } from "@/src/sharing/ui-modal-content-box";
import { ModalContentButton } from "@/src/sharing/ui-modal-content-button";
import { ModalContentDescription } from "@/src/sharing/ui-modal-content-description";
import { ModalContentTitle } from "@/src/sharing/ui-modal-content-title";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetcher from "../util/axiosInstance";
import { LinkRawData } from "@/src/link/type";
import { Folder, SelectedFolderId } from "@/src/folder/type";

const cx = classNames.bind(styles);

type AlertModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  buttonText: string;
  setLinkId?: Dispatch<SetStateAction<number>>;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  handleButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export const AlertModal = ({
  isOpen,
  title,
  description,
  buttonText,
  setLinkId,
  onCloseClick,
  onKeyDown,
  handleButtonClick,
}: AlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>
        }
        content={
          <ModalContentButton onClick={handleButtonClick} themeColor="red">
            {buttonText}
          </ModalContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
