import styles from "../styles/CardItem.module.css";
import logo from "../assets/emptyImg.svg";

const formatDate = (value) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayOfMonth = date.getDate();
  const formattedCreatedAt = `${year}. ${month}. ${dayOfMonth}`;
  return formattedCreatedAt;
};

function getTimeDiff(target, base = new Date()) {
  const targetDate = new Date(target);
  return base - targetDate;
}

const prettyFormatTimeDiff = (diff) => {
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (minutes < 2) {
    return "1 minute ago";
  }
  if (minutes <= 59) {
    return `${minutes} minutes ago`;
  }
  if (minutes <= 60) {
    return "1 hour ago";
  }
  if (hours <= 23) {
    return `${hours} hours ago`;
  }
  if (hours <= 24) {
    return "1 day ago";
  }
  if (days <= 30) {
    return `${days} days ago`;
  }
  if (days <= 31) {
    return `1 month ago`;
  }
  if (months <= 11) {
    return `${months} months ago`;
  }
  if (months <= 12) {
    return `1 year ago`;
  }
  return `${years} years ago`;
};

function CardItem({ item }) {
  if (item.createdAt) {
    const { createdAt, url, title, description, imageSource } = item;
    const formattedCreatedAt = formatDate(createdAt);
    const timeDiff = getTimeDiff(createdAt);
    const formatTimeDiff = prettyFormatTimeDiff(timeDiff);

    return (
      <a className={styles.CardItem} href={url} target="_blank" rel="noopener noreferrer">
        <div className={styles.img_container}>
          <img className={styles.img} src={imageSource === undefined ? logo : imageSource} alt={title} />
        </div>
        <div className={styles.container}>
          <p className={styles.time_diff}>{formatTimeDiff}</p>
          <p className={styles.description}>
            {title}
            <br />
            {description}
          </p>
          <p className={styles.createdAt}>{formattedCreatedAt}</p>
        </div>
      </a>
    );
  }
  const { created_at, url, title, description, image_source } = item;
  const formattedCreatedAt = formatDate(created_at);
  const timeDiff = getTimeDiff(created_at);
  const formatTimeDiff = prettyFormatTimeDiff(timeDiff);

  return (
    <a className={styles.CardItem} href={url} target="_blank" rel="noopener noreferrer">
      <div className={styles.img_container}>
        <img className={styles.img} src={image_source === null ? logo : image_source} alt={title} />
      </div>
      <div className={styles.container}>
        <p className={styles.time_diff}>{formatTimeDiff}</p>
        <p className={styles.description}>
          {title}
          <br />
          {description}
        </p>
        <p className={styles.createdAt}>{formattedCreatedAt}</p>
      </div>
    </a>
  );
}

export default CardItem;
