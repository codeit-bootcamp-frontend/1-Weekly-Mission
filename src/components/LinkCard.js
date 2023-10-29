import "../css/card.css";
import { Link } from "react-router-dom";
import { calculateRelativeTime, formatDate } from "../utils/timeCalculate.js";
import defaultImg from "../images/noImage.svg";

function redirectToCardPage(url) {
  window.open(url, "_blank", "noopener");
}

function LinkCard({ item }) {
  return (
    <div className="card" onClick={() => redirectToCardPage(item.url)}>
      <Link to={item.url} className="custom-link">
        <img
          className="cardImg"
          src={item.image_source || defaultImg}
          alt="카드폼 이미지"
        />
        <div className="cardContent">
          <p id="createTime">{calculateRelativeTime(item.created_at)}</p>
          <p id="cardDescription">{item.description}</p>
          <p id="cardDate">{formatDate(item.created_at)}</p>
        </div>
      </Link>
    </div>
  );
}

export default LinkCard;
