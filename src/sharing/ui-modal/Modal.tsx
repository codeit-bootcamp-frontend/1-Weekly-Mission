import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import { Portal } from "sharing/ui-portal";
import { KeyboardEvent, MouseEvent, ReactNode } from "react";

const cx = classNames.bind(styles);

interface ModalProps {
  children: ReactNode | undefined
  isOpen?: boolean;
  disableScrollLock?: boolean;
  hideBackdrop?: boolean;
  onBackdropClick: (event: MouseEvent) => void;
  onKeyDown: (event: KeyboardEvent) => void;
}

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
