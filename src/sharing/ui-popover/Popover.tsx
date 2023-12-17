import styles from "./Popover.module.scss";
import classNames from "classnames/bind";
import { CSSProperties, useCallback, useMemo, useRef } from "react";
import { Portal } from "@/src/sharing/ui-portal";
import { useBackgroundClick } from "@/src/sharing/util";

const cx = classNames.bind(styles);

type PopoverProps = {
  children: React.ReactNode;
  isOpen: boolean;
  anchorRef?: React.MutableRefObject<Element | null>;
  anchorPosition?: {
    top?: CSSProperties["top"];
    right?: CSSProperties["right"];
    bottom?: CSSProperties["bottom"];
    left?: CSSProperties["left"];
  };
  disableCloseWithBackgroundClick?: boolean;
  onBackgroundClick: () => void;
};

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
  const handleBackgroundClick = useCallback<(event: MouseEvent) => void>(
    ({ target }) => {
      const isPopover = popoverRef.current?.contains(target as Node);
      const isAnchor = anchorRef?.current?.contains(target as Node);
      if (!isPopover && !isAnchor && !disableCloseWithBackgroundClick && isOpen) {
        onBackgroundClick();
      }
    },
    [popoverRef, anchorRef, disableCloseWithBackgroundClick, isOpen, onBackgroundClick]
  );
  useBackgroundClick(handleBackgroundClick);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={anchorRef?.current}>
      <div className={cx("popover")} ref={popoverRef} style={{ ...positionStyle }}>
        {children}
      </div>
    </Portal>
  );
};
