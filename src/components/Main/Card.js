import LogoImg from "../../assets/card-logo.png";
import "./Card.css";
import "../../style/style.css";
import moment from "moment";

function calculateTimeAgo(createdAt) {
  const createdDate = moment(createdAt, "YYYY-MM-DDTHH:mm:ss[Z]");
  const currentDate = moment();
  const diff = currentDate.diff(createdDate, "seconds");

  if (diff < 120) {
    return "1 minute ago";
  } else if (diff <= 3540) {
    return `${Math.floor(diff / 60)} minutes ago`;
  } else if (diff < 3600) {
    return "1 hour ago";
  } else if (diff <= 82800) {
    return `${Math.floor(diff / 3600)} hours ago`;
  } else if (diff < 86400) {
    return "1 day ago";
  } else if (diff <= 2592000) {
    return `${Math.floor(diff / 86400)} days ago`;
  } else if (diff <= 28512000) {
    return `${Math.floor(diff / 2592000)} months ago`;
  } else if (diff <= 31536000) {
    return "1 year ago";
  } else {
    return `${Math.floor(diff / 31536000)} years ago`;
  }
}

function Card({ link }) {
  const { createdAt, description, imageSource, title, url } = link;
  const createdDate = new Date(createdAt);
  return (
    <a className="Card" href={url}>
      <div>
        <div className="Card-image-container">
          <img
            className={imageSource ? "Card-image" : "no-img-logo"}
            src={imageSource ? imageSource : LogoImg}
            alt="카드 사진"
          />
        </div>

        <div className="Card-content-container">
          <div className="Card-content-ago">{calculateTimeAgo(createdAt)}</div>
          <div>{title}</div>
          <div className="Card-content">{description}</div>
          <div className="Card-contentAt">
            {moment(createdAt).format("YYYY.MM.DD")}
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
