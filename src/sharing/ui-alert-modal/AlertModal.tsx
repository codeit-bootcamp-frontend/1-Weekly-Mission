import React from "react";
import styles from "./AlertModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "sharing/ui-modal";
import { ModalContentBox } from "sharing/ui-modal-content-box";
import { ModalContentButton } from "sharing/ui-modal-content-button";
import { ModalContentDescription } from "sharing/ui-modal-content-description";
import { ModalContentTitle } from "sharing/ui-modal-content-title";

const cx = classNames.bind(styles);

type AlertModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  onCloseClick: React.MouseEventHandler<HTMLElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
};

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}) => {
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
          <ModalContentButton onClick={onClick} themeColor="red">
            {buttonText}
          </ModalContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
