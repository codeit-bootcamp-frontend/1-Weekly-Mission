import IMAGES from "../../assets/images.js";

import { convertCreatedAt, formatDate } from "../../utils/utils";
import useToggle from "../../hooks/useToggle";
import "./Card.css";

const CardInfo = ({ createdAt, description }) => {
  const handleKebabClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card-info">
      <div className="card-info-top">
        <p className="card-time-difference">{convertCreatedAt(createdAt)}</p>
        <img
          className="card-kebab"
          src={IMAGES.kebab}
          alt="더보기"
          onClick={handleKebabClick}
        />
      </div>
      <p className="card-description">{description}</p>
      <p className="card-created-at">{formatDate(createdAt)}</p>
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
    <div className="card-img-container">
      <img className="card-img" src={imgUrl || IMAGES.noImage} alt="카드" />
      <img
        className="card-star"
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
    <a href={url} target="_blank" rel="noreferrer" className="card">
      <CardImage imgUrl={imageSource} />
      <CardInfo createdAt={createdAt} description={description} />
    </a>
  );
};

export default Card;
