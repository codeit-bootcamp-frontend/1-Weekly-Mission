import "../styles/card.css";
import "../styles/reset.css";
import noImage from "../images/noimage.svg";
import star from "../images/star.svg";
import KebabButton from "./Kebab";
import { timeForToday, formatDate } from "../date.js";

function Card({ item, handleModalKebab }) {
  const { url, imageSource = noImage, title, createdAt, description } = item;
  return (
    <>
      <a href={url}>
        <div className="card-container">
          <div className="card-image-wrapper">
            <img
              className="card-image"
              src={item.image_source || imageSource}
              alt={title}
            />
            <button className="star-button">
              <img className="start" src={star} alt="" />
            </button>
          </div>

          <div className="card-box">
            <span className="card-created-time">
              {timeForToday(createdAt || item.created_at)}
              <KebabButton />
            </span>
            <span className="card-text">{description}</span>
            <span className="card-created-at">
              {formatDate(createdAt || item.created_at)}
            </span>
          </div>
        </div>
      </a>
    </>
  );
}

export default Card;
