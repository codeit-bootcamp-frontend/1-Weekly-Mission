import "./Card.css";
import { format } from "timeago.js";
import noImage from "images/no-image.svg";

function Card({ item }) {
  const { imageSource, createdAt, title, description, url } = item;

  let date = new Date(createdAt);
  date = date.toLocaleDateString();

  let timeDiff = format(createdAt, "en_US");

  const moveUrl = () => {
    window.open(url);
  };

  return (
    <div onClick={moveUrl}>
      <div className="img-container">
        <img className="img" src={imageSource || noImage} alt={title} />
      </div>
      <div className="info">
        <p className="time-diff">{timeDiff}</p>
        <p className="description">{description}</p>
        <p className="date">{date}</p>
      </div>
    </div>
  );
}

export default Card;
