import IMAGES from "../../assets/images.js";

import { convertCreatedAt, formatDate } from "../../utils/utils";
import useToggle from "../../hooks/useToggle";
import styles from "./Card.module.css";

const CardInfo = ({ createdAt, description }) => {
  const handleKebabClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.cardInfo}>
      <div className={styles.cardInfoTop}>
        <p className={styles.cardTimeDifference}>
          {convertCreatedAt(createdAt)}
        </p>
        <img
          className={styles.cardKebab}
          src={IMAGES.kebab}
          alt="더보기"
          onClick={handleKebabClick}
        />
      </div>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.cardCreatedAt}>{formatDate(createdAt)}</p>
    </div>
  );
};

const CardImage = ({ imgUrl }) => {
  const [isLiked, setIsLiked] = useToggle(false);

  const handleStarClick = (e) => {
    e.preventDefault();
    setIsLiked(isLiked);
  };
  return (
    <div className={styles.cardImgContainer}>
      <img
        className={styles.cardImg}
        src={imgUrl || IMAGES.noImage}
        alt="카드"
      />
      <img
        className={styles.cardStar}
        src={isLiked ? IMAGES.filledStar : IMAGES.emptyStar}
        alt="star"
        onClick={handleStarClick}
      />
    </div>
  );
};

const Card = ({ items }) => {
  const { createdAt, description, imageSource, url } = items;

  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.card}>
      <CardImage imgUrl={imageSource} />
      <CardInfo createdAt={createdAt} description={description} />
    </a>
  );
};

export default Card;
