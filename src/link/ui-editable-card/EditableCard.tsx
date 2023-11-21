import styles from "./EditableCard.module.scss";
import classNames from "classnames/bind";
import { MouseEvent, useCallback, useRef, useState } from "react";
import { Card } from "sharing/ui-card";
import { CardContent } from "sharing/ui-card-content";
import { CardImage } from "sharing/ui-card-image";
import { Popover } from "sharing/ui-popover";

interface EditableCardProps {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
  popoverPosition: {
    left?: number;
    right?: number;
  };
  onDeleteClick: () => void;
  onAddToFolderClick: () => void;
}

const cx = classNames.bind(styles);

export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  popoverPosition,
  onDeleteClick,
  onAddToFolderClick,
}: EditableCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const kebabButtonRef = useRef<HTMLButtonElement>(null);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleKebabClick = (event: MouseEvent) => {
    event.preventDefault();
    setIsPopoverOpen(true);
  };
  const handleBackgroundClick = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);
  const handleDeleteClick = (event: MouseEvent) => {
    event.preventDefault();
    onDeleteClick();
    setIsPopoverOpen(false);
  };
  const handleAddToFolderClick = (event: MouseEvent) => {
    event.preventDefault();
    onAddToFolderClick();
    setIsPopoverOpen(false);
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} isZoomedIn={isHovered} />
        <CardContent elapsedTime={elapsedTime} description={description} createdAt={createdAt} isHovered={isHovered} />
        <button className={cx("star")} onClick={(event) => event.preventDefault()}>
          <img src="images/star.svg" alt="즐겨찾기를 나타내는 별" />
        </button>
        <button ref={kebabButtonRef} className={cx("kebab")} onClick={handleKebabClick}>
          <img src="images/kebab.svg" alt="더보기를 나타내는 점 3개" />
        </button>
        <Popover
          isOpen={isPopoverOpen}
          anchorRef={kebabButtonRef}
          anchorPosition={popoverPosition}
          onBackgroundClick={handleBackgroundClick}
        >
          <ul className={cx("popover-list")}>
            <li onClick={handleDeleteClick}>삭제하기</li>
            <li onClick={handleAddToFolderClick}>폴더에 추가</li>
          </ul>
        </Popover>
      </Card>
    </a>
  );
};
