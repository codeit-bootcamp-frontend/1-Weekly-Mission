import "./Cards.css";
import DEFAULT_IMG from "../assets/images/noImg.png";
import favoritesImg from "../assets/images/star.svg";
import meatballMenuImg from "../assets/images/meatball.svg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";
import PopOver from "./PopOver";
dayjs.extend(relativeTime);

function FavoriteBtn() {
  return <img className="favorites" src={favoritesImg} alt="즐겨찾기 이미지" />;
}

function Cards({ cardInfo }) {
  const { createdAt, url, description, imageSource, created_at, image_source } =
    cardInfo;
  const updateTimeAgo = dayjs(createdAt ?? created_at).fromNow();
  const updateDate = dayjs(createdAt ?? created_at).format("YYYY. MM. DD");
  const [popOverOn, setPopOverOn] = useState(false);

  function togglePopover() {
    setPopOverOn(!popOverOn);
  }

  function MeatballBtn({ onClick }) {
    return (
      <button onClick={() => onClick(true)}>
        <img src={meatballMenuImg} alt="추가메뉴 버튼" />
      </button>
    );
  }

  function handleOpenNewTab(url) {
    window.open(url, "_blank", "noreferrer noopener");
  }

  return (
    <li className="card-list">
      <div className="card-box">
        <div className="card-image-box" onClick={() => handleOpenNewTab(url)}>
          <img
            className="card"
            src={imageSource ?? image_source ?? DEFAULT_IMG}
            alt="카드 이미지"
          />

          <FavoriteBtn />
        </div>
        <div className="card-info">
          <div className="update-time">
            <p>{updateTimeAgo}</p>
            <MeatballBtn onClick={togglePopover} />
            {popOverOn && <PopOver />}
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="update-date">
            <p>{updateDate}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Cards;
