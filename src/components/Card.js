import "./Card.css";
import defaultImg from "../assets/no-image.png";
const moment = require("moment");

const Card = ({ value, path }) => {
  const imageSource =
    path === "/Folder" ? value.image_source : value.imageSource;
  const cardImage = imageSource ? imageSource : defaultImg;

  const imageStyle = {
    backgroundImage: `url(${cardImage})`,
  };
  const ago = moment(value.createdAt).fromNow();
  const date = moment(value.createdAt).format("YYYY. MM. DD");
  return (
    <a href={value.url} className="card">
      <div style={imageStyle} className="card-image"></div>
      <div className="card-text">
        <div className="posting-box">
          <div className="posting-time">{ago}</div>
          <div className="kebob-button"></div>
        </div>
        <div className="posting-description">{value.description}</div>
        <div className="posting-date">{date}</div>
      </div>
    </a>
  );
};

export default Card;
