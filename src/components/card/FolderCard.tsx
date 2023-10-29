import { NO_CARD_IMAGE } from "constants/common";
import { Link } from "react-router-dom";
import styles from "styles/modules/card.module.css";
import formatDate from "utils/formatDate";
import formatPeriod from "utils/formatPeriod";

function FolderCard({ url, description, imageSource, createdAt }: LinksData) {
  return (
    <Link to={url} target="_blank">
      <div className={styles.wrapper}>
        <div className={styles.cardImgWrapper}>
          <img
            src={imageSource ? imageSource : NO_CARD_IMAGE}
            alt="cardImg"
            className={styles.cardImg}
          />
        </div>
        <div className={styles.contentWrapper}>
          <span className={styles.time}>{formatPeriod(createdAt)}</span>
          <p className={styles.description}>{description}</p>
          <span>{formatDate(createdAt)}</span>
        </div>
      </div>
    </Link>
  );
}

export default FolderCard;
