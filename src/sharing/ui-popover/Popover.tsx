import styles from "./Popover.module.scss";
import classNames from "classnames/bind";
import { ReactNode, RefObject, useCallback, useMemo, useRef } from "react";
import { Portal } from "sharing/ui-portal";
import { useBackgroundClick } from "sharing/util/useBackgroundClick";

interface PopoverProps {
  children: ReactNode;
  isOpen: boolean;
  anchorRef: RefObject<HTMLButtonElement>;
  anchorPosition: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  disableCloseWithBackgroundClick?: boolean;
  onBackgroundClick: (e: MouseEvent) => void;
}

const cx = classNames.bind(styles);

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
      const target = event.target as Node;
      const isPopover = popoverRef.current?.contains(target);
      const isAnchor = anchorRef.current?.contains(target);
      if (!isPopover && !isAnchor && !disableCloseWithBackgroundClick && isOpen) {
        onBackgroundClick(event);
      }
    },
    [popoverRef, anchorRef, disableCloseWithBackgroundClick, isOpen, onBackgroundClick]
  );
  useBackgroundClick(handleBackgroundClick);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={anchorRef.current}>
      <div className={cx("popover")} style={{ ...positionStyle }}>
        {children}
      </div>
    </Portal>
  );
};
