import { Link } from "react-router-dom";
import { formatDate, getTimeDiff, prettyFormatTimeDiff } from "../../utils/utils";
import styles from "./CardItem.module.css";
import logoImg from "../../assets/emptyImg.svg";

function SharedPageCardItem({ item }) {
  const { createdAt, url, title, description, imageSource } = item;
  const formattedCreatedAt = formatDate(createdAt);
  const timeDiff = getTimeDiff(createdAt);
  const formatTimeDiff = prettyFormatTimeDiff(timeDiff);

  return (
    <div className={styles.CardItem}>
      <Link className={styles.img_container} to={url} target="_blank" rel="noopener noreferrer">
        <img className={styles.img} src={imageSource === undefined ? logoImg : imageSource} alt={title} />
      </Link>
      <div className={styles.content_container}>
        <p className={styles.time_diff}>{formatTimeDiff}</p>
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
