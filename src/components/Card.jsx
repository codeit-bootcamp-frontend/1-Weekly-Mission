import "./Card.css";
import { format } from "timeago.js";

function Card({ item }) {
  const { imageSource, createdAt, title, description } = item;

  let date = new Date(createdAt);
  date = date.toLocaleDateString();

  let timeDiff = format(createdAt, 'en_US');

  return (
    <div className="Card">
      <div className="img-container">
        <img className="img" src={imageSource} alt={title} />
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
