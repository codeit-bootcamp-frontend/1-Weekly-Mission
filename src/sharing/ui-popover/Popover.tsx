import styles from "./Popover.module.scss";
import classNames from "classnames/bind";
import React, { RefObject, useCallback, useMemo, useRef } from "react";
import { Portal } from "sharing/ui-portal";
import { useBackgroundClick } from "sharing/util/useBackgroundClick";

const cx = classNames.bind(styles);

interface PopoverProps {
  children: React.ReactNode;
  isOpen: boolean;
  anchorRef: RefObject<HTMLElement>;
  anchorPosition?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  disableCloseWithBackgroundClick?: boolean;
  onBackgroundClick: () => void;
}

export const Popover = ({
  children,
  isOpen,
  anchorRef,
  anchorPosition,
  disableCloseWithBackgroundClick = false,
  onBackgroundClick,
}: PopoverProps) => {
  const popoverRef = useRef<HTMLElement>(null);

  const positionStyle = useMemo(() => {
    return {
      top: anchorPosition?.top ?? "unset",
      right: anchorPosition?.right ?? "unset",
      bottom: anchorPosition?.bottom ?? "unset",
      left: anchorPosition?.left ?? "unset",
    };
  }, [anchorPosition]);

  const handleBackgroundClick = useCallback(
    (event: Event) => {
      // MouseEvent 대신 Event 타입을 사용
      const target = event.target as Node; // EventTarget을 Node로 타입 단언
      const isPopover = popoverRef.current?.contains(target);
      const isAnchor = anchorRef.current?.contains(target);
      if (
        !isPopover &&
        !isAnchor &&
        !disableCloseWithBackgroundClick &&
        isOpen
      ) {
        onBackgroundClick();
      }
    },
    [
      popoverRef,
      anchorRef,
      disableCloseWithBackgroundClick,
      isOpen,
      onBackgroundClick,
    ]
  );

  useBackgroundClick(handleBackgroundClick);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={anchorRef.current ?? undefined}>
      {" "}
      {/* null 대신 undefined 사용 */}
      <div className={cx("popover")} style={{ ...positionStyle }}>
        {children}
      </div>
    </Portal>
  );
};
