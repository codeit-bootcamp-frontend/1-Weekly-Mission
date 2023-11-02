import { Link } from "react-router-dom";
import styles from "./CardItem.module.css";
import logoImg from "../../assets/emptyImg.svg";

function SharedPageCardItem({ formatTimeDiff, formattedCreatedAt, url, title, description, imageSource }) {
  return (
    <div className={styles.cardItem}>
      <Link className={styles.imgContainer} to={url} target="_blank" rel="noopener noreferrer">
        <img className={styles.img} src={imageSource === null ? logoImg : imageSource} alt={title} />
      </Link>
      <div className={styles.contentContainer}>
        <p className={styles.timeDiff}>{formatTimeDiff}</p>
        <p className={styles.description}>
          {title}
          <br />
          {description}
        </p>
        <p className={styles.createdAt}>{formattedCreatedAt}</p>
      </div>
    </div>
  );
}

export default SharedPageCardItem;
