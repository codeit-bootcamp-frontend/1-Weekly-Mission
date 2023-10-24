import "./Card.css";
import noImage from "images/no-image.svg";
import { formatDate, formatTimeDiff } from "utils";

function Card({ item }) {
  const { imageSource, createdAt, title, description, url } = item;

  const moveUrl = () => {
    window.open(url);
  };

  return (
    <div onClick={moveUrl}>
      <div className="img-container">
        <img className="img" src={imageSource || noImage} alt={title} />
      </div>
      <div className="info">
        <p className="time-diff">{formatTimeDiff(createdAt)}</p>
        <p className="description">{description}</p>
        <p className="date">{formatDate(createdAt)}</p>
      </div>
    </div>
  );
}

export default Card;
