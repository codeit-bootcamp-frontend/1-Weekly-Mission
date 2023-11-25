import styles from "./Card.module.css";
import kebabImg from "../../assets/images/kebab.svg";
import noImg from "../../assets/images/no-image.svg";
import starIcon from "../../assets/images/star.svg";
import { MouseEvent, useState } from "react";
import { formatDate, formatTimeAgo } from "../../utils/formatDate";
import normalizeCardData from "../../utils/normalizeCardData";
import clsx from "clsx";
import useModalColtroller from "../../hooks/useModalController";

type CardDataA = {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};

type CardDataB = {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
};

interface Props {
  card: CardDataA | CardDataB;
  shared: Boolean;
  deleteLinkModalControl?: (e: MouseEvent) => void;
  addLinkModalControl?: (e: MouseEvent) => void;
  setTargetURL?: React.Dispatch<React.SetStateAction<string>>;
}

function Card({ card, shared, deleteLinkModalControl, addLinkModalControl, setTargetURL }: Props) {
  const kebab = useModalColtroller(true);

  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const handleDeleteClick = (e: MouseEvent) => {
    if (deleteLinkModalControl && setTargetURL) {
      deleteLinkModalControl(e);
      setTargetURL(card.url);
    }
  };

  const handleAddClick = (e: MouseEvent) => {
    if (addLinkModalControl && setTargetURL) {
      addLinkModalControl(e);
      setTargetURL(card.url);
    }
  };

  const normalizedCardData = normalizeCardData(card);
  const cardDate = normalizedCardData.createdAt as string;
  const cardImage = normalizedCardData.imageSource as string;

  const imageStyle = clsx(styles.image, hover && styles.hoverImage);
  const bgColorStyle = clsx(styles.root, hover && styles.hoverBgColor);

  const bgImg = {
    backgroundImage: `url(${cardImage || noImg})`,
  };

  return (
    <div className={bgColorStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <a href={card.url}>
        <div className={imageStyle} style={bgImg}>
          {shared === false && (
            <button type="button" className={styles.star}>
              <img src={starIcon} alt="즐겨찾기" />
            </button>
          )}
        </div>
        <div className={styles.explanation}>
          <div className={styles.header}>
            <div>{formatTimeAgo(cardDate)}</div>
            {shared === false && (
              <div className={styles.kebab}>
                <button type="button" onClick={kebab.handleClick}>
                  <img src={kebabImg} alt="쩜쩜쩜" />
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

          <div className={styles.footer}>{formatDate(cardDate)}</div>
        </div>
      </a>
    </div>
  );
}

export default Card;
