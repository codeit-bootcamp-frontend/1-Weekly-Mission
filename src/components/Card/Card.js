import "./Card.css";

import noImage from "../../assets/no-image.svg";
import { cardCreatedAtConvert } from "../../utils/utils";
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

  const formatDate = (value) => {
    const timeDiff = cardCreatedAtConvert(value);
    setTimeDiff(timeDiff);
    const date = new Date(value);
    setDateFormat(
      `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
    );
  };
  useEffect(() => {
    formatDate(createdAt);
  }, []);

  return (
    <div className="card">
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
