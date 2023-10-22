import "./Card.css";

import noImage from "../../assets/no-image.svg";
import { convertCreatedAt } from "../../utils/utils";
import { useEffect, useState } from "react";

const Card = ({
  className,
  createdAt,
  description,
  id,
  imgUrl,
  title,
  url,
}) => {
  const [timeDiff, setTimeDiff] = useState(null);
  const [dateFormat, setDateFormat] = useState("");

  const handleCardClick = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  const formatDate = (timeValue) => {
    const date = new Date(timeValue);
    setDateFormat(
      `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
    );
  };

  const calcTimeDifference = (time) => {
    const timeDiff = convertCreatedAt(time);
    setTimeDiff(timeDiff);
  };

  useEffect(() => {
    formatDate(createdAt);
    calcTimeDifference(createdAt);
  }, [createdAt]);

  return (
    <div className="card" onClick={() => handleCardClick(url)}>
      <div className="card-img-container">
        <img className="card-img" src={imgUrl || noImage} alt="카드" />
      </div>
      <div className="card-info">
        <div>
          <p className="card-time-difference">{timeDiff}</p>
        </div>
        <p className="card-description">{description}</p>
        <p className="card-created-at">{dateFormat}</p>
      </div>
    </div>
  );
};

export default Card;
