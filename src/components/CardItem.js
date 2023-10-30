import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CardItem.module.css";
import logoImg from "../assets/emptyImg.svg";
import starImg from "../assets/star.svg";
import kebabImg from "../assets/kebab.svg";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (item.createdAt) {
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
  const { created_at, url, title, description, image_source } = item;
  const formattedCreatedAt = formatDate(created_at);
  const timeDiff = getTimeDiff(created_at);
  const formatTimeDiff = prettyFormatTimeDiff(timeDiff);

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className={styles.CardItem}>
      <Link className={styles.img_container} to={url} target="_blank" rel="noopener noreferrer">
        <img className={styles.img} src={image_source === null ? logoImg : image_source} alt={title} />
      </Link>
      <button className={styles.bookmark_button}>
        <img src={starImg} alt="즐겨찾기 이미지" />
      </button>
      <div className={styles.content_container}>
        <div className={styles.container}>
          <p className={styles.time_diff}>{formatTimeDiff}</p>
          <button onClick={handleToggleModal}>
            <img src={kebabImg} alt="케밥 이미지" />
          </button>
          {isModalOpen && (
            <div className={styles.modal}>
              <button>삭제하기</button>
              <button>폴더에 추가</button>
            </div>
          )}
        </div>
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

export default CardItem;
