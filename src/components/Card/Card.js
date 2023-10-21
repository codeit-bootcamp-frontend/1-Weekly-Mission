import "./Card.css";

import noImage from "../../assets/no-image.svg";

const Card = ({
  className,
  createdAt,
  description,
  id,
  imgUrl,
  title,
  url,
}) => {
  function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`;
  }

  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img" src={imgUrl || noImage} alt="카드" />
      </div>
      <div className="card-info">
        <div>
          <p className="card-time-difference">10 minutes ago</p>
        </div>
        <p className="card-description">{description}</p>
        <p className="card-created-at">{formatDate(createdAt)}</p>
      </div>
    </div>
  );
};

export default Card;
