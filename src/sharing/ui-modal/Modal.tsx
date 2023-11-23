import React from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import { Portal } from "sharing/ui-portal";

const cx = classNames.bind(styles);

type ModalProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  disableScrollLock?: boolean;
  hideBackdrop?: boolean;
  onBackdropClick?: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
};

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen = false,
  disableScrollLock = false,
  hideBackdrop = false,
  onBackdropClick,
  onKeyDown,
}) => {
  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
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
