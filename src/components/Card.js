import "../css/card.css";
import { calculateRelativeTime, formatDate } from "../utils/timeCalculate.js";
import defaultImg from "../images/noImage.svg";

function redirectToCardPage(url) {
  window.open(url, "_blank", "noopener");
}

function Card({ item }) {
  return (
    <div className="card" onClick={() => redirectToCardPage(item.url)}>
      <img
        className="cardImg"
        src={item.imageSource || defaultImg}
        alt="카드폼 이미지"
      />

      <div className="cardContent">
        <p id="createTime">{calculateRelativeTime(item.createdAt)}</p>
        <p id="cardDescription">{item.description}</p>
        <p id="cardDate">{formatDate(item.createdAt)}</p>
      </div>
    </div>
  );
}

export default Card;
