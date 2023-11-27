import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { Portal } from "sharing/ui-portal";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  disableScrollLock?: boolean;
  hideBackdrop?: boolean;
  onBackdropClick: (e: MouseEvent) => void;
  onKeyDown: (e: KeyboardEvent) => void;
}

const cx = classNames.bind(styles);

export const Modal = ({
  children,
  isOpen = false,
  disableScrollLock = false,
  hideBackdrop = false,
  onBackdropClick,
  onKeyDown,
}: ModalProps) => {
  const handleBackdropClick = (event: MouseEvent) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={cx("container", { backdrop: !hideBackdrop })}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {children}
      </div>
    </Portal>
  );
};
