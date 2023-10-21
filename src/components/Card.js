import { useState, useRef } from "react";
import kebab from "../assets/images/svg/kebab.svg";
import noImageIMG from "../assets/images/svg/noImage.svg";
import starIMG from "../assets/images/svg/star.svg";
import chosenStarIMG from "../assets/images/svg/chosenStar.svg";
import { timeForToday } from "../utils";
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
        <p className="description">{data.description}</p>
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
