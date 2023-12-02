import styles from "./Card.module.css";
import { MouseEvent, useState } from "react";
import clsx from "clsx";
import { Linkinfo } from "@/API/getLinksByFolderID";
import { formatDate, formatTimeAgo } from "@/util/formatDate";
import Image from "next/image";
import useModalController from "@/hooks/useModalController";

interface Props {
  card: Linkinfo;
  shared: Boolean;
  deleteLink?: (e: MouseEvent) => void;
  addLinkToFolder?: (e: MouseEvent) => void;
  setTargetURL?: React.Dispatch<React.SetStateAction<string>>;
}

function Card({ card, shared, deleteLink, addLinkToFolder, setTargetURL }: Props) {
  const kebab = useModalController(true);

  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const handleDeleteClick = (e: MouseEvent) => {
    if (deleteLink && setTargetURL) {
      deleteLink(e);
      setTargetURL(card.url);
    }
  };

  const handleAddClick = (e: MouseEvent) => {
    if (addLinkToFolder && setTargetURL) {
      addLinkToFolder(e);
      setTargetURL(card.url);
    }
  };

  const imageStyle = clsx(styles.image, hover && styles.hoverImage);
  const bgColorStyle = clsx(styles.root, hover && styles.hoverBgColor);

  const bgImg = {
    backgroundImage: `url(${card.image_source || "/images/icon/common-icons/no-image.svg"})`,
  };

  return (
    <div className={bgColorStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <a href={card.url}>
        <div className={imageStyle} style={bgImg}>
          {shared === false && (
            <button type="button" className={styles.starContainer}>
              <Image fill className={styles.star} src="/images/icon/common-icons/star.svg" alt="즐겨찾기" />
            </button>
          )}
        </div>
        <div className={styles.explanation}>
          <div className={styles.header}>
            <div>{formatTimeAgo(card.created_at)}</div>
            {shared === false && (
              <div className={styles.kebabBox}>
                <button type="button" className={styles.kebabContainer} onClick={kebab.handleClick}>
                  <Image fill className={styles.kebab} src="/images/icon/navigation-icons/kebab.svg" alt="쩜쩜쩜" />
                </button>

                {kebab.state && (
                  <div className={styles.kebabButtonList}>
                    <button className={styles.kebabButton} onClick={handleDeleteClick}>
                      삭제하기
                    </button>
                    <button className={styles.kebabButton} onClick={handleAddClick}>
                      폴더에 추가
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className={styles.text}>
            <div>{card.title}</div>
            <div>{card.description}</div>
          </div>

          <div className={styles.footer}>{formatDate(card.created_at)}</div>
        </div>
      </a>
    </div>
  );
}

export default Card;
