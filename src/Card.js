import "./css/card.css";
import { useState, useEffect } from "react";
import { calculateRelativeTime, formatDate } from "./utils/timeUtil.js";

function redirectToCardPage(url) {
  window.open(url, "_blank", "noopener");
}

function Card({ item }) {
  const [hasImage, setHasImage] = useState(false);

  const checkImageSource = function () {
    if (item.imageSource === undefined) {
      setHasImage(false);
    } else {
      setHasImage(true);
    }
  };

  useEffect(() => {
    checkImageSource();
  }, []);

  return (
    <div className="card" onClick={() => redirectToCardPage(item.url)}>
      {hasImage && (
        <img className="cardImg" src={item.imageSource} alt="카드폼 이미지" />
      )}
      <div className="cardContent">
        <p id="createTime">{calculateRelativeTime(item.createdAt)}</p>
        <p id="cardDescription">{item.description}</p>
        <p id="cardDate">{formatDate(item.createdAt)}</p>
      </div>
    </div>
  );
}

export default Card;
