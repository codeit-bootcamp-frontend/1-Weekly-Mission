import "./card.css";
import moment from "moment";
import LogoImg from "../../assets/common/img_logo.png";

const calculateTimeAgo = (createdAt) => {
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
};

const Card = ({ cardData }) => {
  const ago = calculateTimeAgo(cardData.created_at || cardData.createdAt);
  const createdAtFormat = moment(
    cardData.created_at || cardData.createdAt
  ).format("YYYY.MM.DD");

  const openUrl = () => {
    window.open(cardData.url, "__blank");
  };

  return (
    <div className="cardContainer" onClick={openUrl}>
      {cardData.image_source || cardData.imageSource ? (
        <div className="cardImageContainer">
          <img
            className="cardImage"
            src={cardData.image_source || cardData.imageSource}
            alt="cardImg"
          />
        </div>
      ) : (
        <div className="cardImageContainer cardImage">
          <img src={LogoImg} alt="logoImg" className="noImgLogo" />
        </div>
      )}
      <div className="contentContainer">
        <div className="contentAgo">{ago}</div>
        <div className="content">{cardData.description}</div>
        <div className="contentAt">{createdAtFormat}</div>
      </div>
    </div>
  );
};

export default Card;
