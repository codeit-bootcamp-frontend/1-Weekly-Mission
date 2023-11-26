import styles from "./Popover.module.scss";
import classNames from "classnames/bind";
import { RefObject, useCallback, useMemo, useRef } from "react";
import { Portal } from "sharing/ui-portal";
import { useBackgroundClick } from "sharing/util/useBackgroundClick";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface PopoverProps {
  children: ReactNode;
  isOpen: boolean;
  anchorRef: RefObject<HTMLButtonElement>;
  anchorPosition: {
    right?: number | undefined;
    left?: number | undefined;
    top?: number | undefined;
    bottom?: number | undefined;
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
  const popoverRef = useRef<HTMLDivElement>(null);
  const positionStyle = useMemo(() => {
    return {
      top: anchorPosition?.top ?? "unset",
      right: anchorPosition?.right ?? "unset",
      bottom: anchorPosition?.bottom ?? "unset",
      left: anchorPosition?.left ?? "unset",
    };
  }, [anchorPosition]);
  const handleBackgroundClick = useCallback(
    (event: MouseEvent) => {
      const isPopover = popoverRef.current?.contains(
        event.target as HTMLElement
      );
      const isAnchor = anchorRef.current?.contains(event.target as HTMLElement);
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
    <Portal container={anchorRef.current}>
      <div
        className={cx("popover")}
        style={{ ...positionStyle }}
        ref={popoverRef}
      >
        {children}
      </div>
    </Portal>
  );
};
