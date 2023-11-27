import styles from "./InputModal.module.scss";
import classNames from "classnames/bind";
import { KeyboardEvent } from "react";
import { Input } from "sharing/ui-input";
import { Modal } from "sharing/ui-modal";
import { ModalContentBox } from "sharing/ui-modal-content-box";
import { ModalContentButton } from "sharing/ui-modal-content-button";
import { ModalContentTitle } from "sharing/ui-modal-content-title";

interface InputModalProps {
  isOpen: boolean;
  title: string;
  placeholder: string;
  buttonText: string;
  onCloseClick: () => void;
  onKeyDown: (e: KeyboardEvent) => void;
  value?: string;
  onChange?: () => void;
}

const cx = classNames.bind(styles);

export const InputModal = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
}: InputModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={<ModalContentTitle>{title}</ModalContentTitle>}
        content={
          <div className={cx("modal-content")}>
            <Input value={value} onChange={onChange} placeholder={placeholder} />
            <ModalContentButton>{buttonText}</ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
