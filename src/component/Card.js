import { useState, useRef } from "react";
import moment from "moment";
import Star from "./Star";
import kebabICON from "../assets/img/icon-kebab.svg";
import noImageIMG from "../assets/img/img-linkthumb-noimg.svg";
import "../assets/css/Card.css";

function Card({ data, onClick }) {
  /*---star---*/
  const [star, setStar] = useState(false);

  const handleStarClick = (e) => {
    e.stopPropagation();
    if (star) {
      setStar(false);
    } else {
      setStar(true);
    }
  };

  /*--card clik--*/
  const handleCardClick = () => {
    onClick(data.url);
  };

  /*--format date--*/
  const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  function timeForToday(createdAt) {
    const today = moment();
    const createdTime = moment(createdAt);

    today.format();

    const diffYears = today.diff(createdTime, "years");
    const diffMonths = today.diff(createdTime, "months");
    const diffDays = today.diff(createdTime, "days");
    const diffHours = today.diff(createdTime, "hours");
    const diffMins = today.diff(createdTime, "minutes");

    if (diffMins < 2) return "1 minute ago";
    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (60 <= diffMins && diffHours < 2) return "1 hour ago";
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (24 <= diffHours && diffDays < 2) return "1 day ago";
    if (diffMonths < 1) return `${diffDays} days ago`;
    if (1 <= diffMonths && diffMonths < 2) return "1 month ago";
    if (diffYears < 1) return `${diffMonths} months ago`;
    if (1 <= diffYears) return "1 year ago";
    return `${diffYears} years ago`;
  }

  /*========= JSX =========*/
  return (
    <div className="cardContainer" onClick={handleCardClick}>
      <Star isStared={star} onClick={handleStarClick} />
      <div className="cardImgBox">
        <img
          className="cardImg"
          src={data.imageSource || noImageIMG}
          alt={data.imageSource ? "카드 이미지" : "이미지 없음"}
        />
      </div>

      <div className="infoContainer">
        <div className="additionalInfo">
          <span className="timeForToday">{timeForToday(data.createdAt)}</span>
          <img src={kebabICON} alt="카드 설정 더보기" />
        </div>
        <p className="description">{data.description}</p>
        <span className="createdDate">{formatDate(data.createdAt)}</span>
      </div>
    </div>
  );
}

export default Card;
