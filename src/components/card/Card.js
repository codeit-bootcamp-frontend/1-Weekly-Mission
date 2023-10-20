import "./card.css";
import moment from "moment";
import { useEffect, useState } from "react";
import LogoImg from "../../assets/common/img_logo.png";

const Card = ({ src, createdAt, content, url }) => {
  const [ago, setAgo] = useState(0);
  const [createdAtFormat, setCreatedAtFormat] = useState(createdAt);

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

  const openUrl = () => {
    window.open(url, "__blank");
  };

  useEffect(() => {
    setAgo(calculateTimeAgo(createdAt));
    setCreatedAtFormat(moment(createdAt).format("YYYY.MM.DD"));
  }, [createdAt]);

  return (
    <div className="cardContainer" onClick={openUrl}>
      {src ? (
        <div className="cardImageContainer">
          <img className="cardImage" src={src} alt="cardImg" />
        </div>
      ) : (
        <div className="cardImageContainer cardImage">
          <img src={LogoImg} alt="logoImg" className="noImgLogo" />
        </div>
      )}
      <div className="contentContainer">
        <div className="contentAgo">{ago}</div>
        <div className="content">{content}</div>
        <div className="contentAt">{createdAtFormat}</div>
      </div>
    </div>
  );
};

export default Card;
