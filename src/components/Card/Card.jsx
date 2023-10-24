import "./Card.css";

import IMAGES from "../../assets/images.js";
import { convertCreatedAt } from "../../utils/utils";
import useToggle from "../../hooks/useToggle";

const Card = ({
  className,
  createdAt,
  description,
  id,
  imgUrl,
  title,
  url,
  hasDetails,
}) => {
  // hasDetails는 카드의 별표시와 kebab을 활용할때 true 값을 준다.

  const [isLiked, setIsLiked] = useToggle(false);

  const handleStarClick = (e) => {
    e.preventDefault();
    setIsLiked(isLiked);
  };

  const formatDate = (timeValue) => {
    const date = new Date(timeValue);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  return (
    <a href={url} target="_blank" rel="noreferrer" className="card">
      <div className="card-img-container">
        <img className="card-img" src={imgUrl || IMAGES.noImage} alt="카드" />
        {hasDetails && (
          <img
            className="card-star"
            src={isLiked ? IMAGES.filledStar : IMAGES.emptyStar}
            alt="star"
            onClick={handleStarClick}
          />
        )}
      </div>
      <div className="card-info">
        <div className="card-info-top">
          <p className="card-time-difference">{convertCreatedAt(createdAt)}</p>
          {hasDetails && <img src={IMAGES.kebab} alt="더보기" />}
        </div>
        <p className="card-description">{description}</p>
        <p className="card-created-at">{formatDate(createdAt)}</p>
      </div>
    </a>
  );
};

export default Card;
