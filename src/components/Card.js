import { useState, useRef } from "react";
import kebab from "../assets/images/svg/kebab.svg";
import noImageIMG from "../assets/images/svg/noImage.svg";
import starIMG from "../assets/images/svg/star.svg";
import chosenStarIMG from "../assets/images/svg/chosenStar.svg";
import "../style/Card.css";

const Card = ({ data, onClick }) => {
  const imgRef = useRef();
  const [star, setStar] = useState(false);

  const handleCardClick = () => {
    onClick(data.url);
  };

  const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  const formatSnippet = (value) => {
    const LENGTH = 50;
    let str = value;
    if (str.length > LENGTH) {
      str = str.substring(0, LENGTH - 2) + "...";
    }
    return str;
  };

  const handleMouseEnter = () => {
    const $imgNode = imgRef.current;
    $imgNode.setAttribute("style", "transform: scale(1.3)");
  };

  const handleMouseLeave = () => {
    const $imgNode = imgRef.current;
    $imgNode.removeAttribute("style");
  };

  const handleStarClick = (e) => {
    e.stopPropagation();
    if (star) {
      setStar(false);
    } else {
      setStar(true);
    }
  };

  function timeForToday(createdAt) {
    const today = new Date();
    const createdTime = new Date(createdAt);

    const betweenTime = Math.floor(
      (today.getTime() - createdTime.getTime()) / 1000 / 60
    );
    if (betweenTime < 2) return "1 minute ago";
    if (betweenTime < 60) return `${betweenTime} minutes ago`;

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 2) return "1 hour ago";
    if (betweenTimeHour < 24) return `${betweenTimeHour} hours ago`;

    const betweenTimeDay = Math.floor(betweenTimeHour / 24);
    if (betweenTimeDay < 2) return "1 day ago";
    if (betweenTimeDay < 31) return `${betweenTimeDay} days ago`;

    const betweenTimeMonth = Math.floor(betweenTimeDay / 31);
    if (betweenTimeMonth < 2) return "1 month ago";
    if (betweenTimeMonth < 12) return `${betweenTimeMonth} months ago`;

    const betweenTimeYear = Math.floor(betweenTimeMonth / 12);
    if (betweenTimeYear < 2) return "1 year ago";
    return `${betweenTimeYear} years ago`;
  }

  return (
    <div
      className="cardContainer"
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cardImgBox">
        {data.imageSource ? (
          <img
            className="cardImg"
            ref={imgRef}
            src={data.imageSource}
            alt="카드 이미지"
          />
        ) : (
          <img
            className="cardImg"
            ref={imgRef}
            src={noImageIMG}
            alt="이미지 없음"
          />
        )}
      </div>
      <div className="infoContainer">
        <div className="additionalInfo">
          <span>{timeForToday(data.createdAt)}</span>
          <img src={kebab} alt="카드 설정 더보기" />
        </div>
        <p className="description">{formatSnippet(data.description)}</p>
        <span>{formatDate(data.createdAt)}</span>
      </div>
      <img
        onClick={handleStarClick}
        className="star"
        src={star ? chosenStarIMG : starIMG}
        alt="즐겨찾기 버튼"
      />
    </div>
  );
};

export default Card;
