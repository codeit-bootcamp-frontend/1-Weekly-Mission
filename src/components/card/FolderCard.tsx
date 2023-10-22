import { NO_CARD_IMAGE } from "constants/common";
import useHover from "hooks/useHover";
import { Link } from "react-router-dom";
import styles from "styles/modules/card.module.css";
import cutString from "utils/cutString";
import formatDate from "utils/formatDate";
import formatPeriod from "utils/formatPeriod";

function FolderCard({ url, description, imageSource, createdAt }: LinksData) {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <Link to={url} target="_blank">
      <div
        className={styles.wrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.cardImgWrapper}>
          <img
            src={imageSource ? imageSource : NO_CARD_IMAGE}
            alt="cardImg"
            className={isHovered ? styles.cardImgHover : styles.cardImg}
          />
        </div>
        <div className={styles.contentWrapper}>
          <span className={styles.time}>{formatPeriod(createdAt)}</span>
          <p className={styles.description}>{cutString(description)}</p>
          <span>{formatDate(createdAt)}</span>
        </div>
      </div>
    </Link>
  );
}

export default FolderCard;
