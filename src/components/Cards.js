import "./Cards.css";
import noImg from "../assets/images/noImg.png";
import favoritesImg from "../assets/images/star.svg";
import meatballMenuImg from "../assets/images/meatball.svg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function Cards({ cardInfo }) {
  const { createdAt, url, description, imageSource } = cardInfo;

  const updateTimeAgo = dayjs(createdAt).fromNow();
  const updateDate = dayjs(createdAt).format("YYYY. MM. DD");

  return (
    <li className="card-list">
      <a href={url} target="_blank" rel="noreferrer noopener">
        <div className="card-box">
          <img className="card" src={imageSource ?? noImg} alt="카드 이미지" />
          <img className="favorites" src={favoritesImg} alt="즐겨찾기 이미지" />
        </div>
        <div className="card-info">
          <div className="update-time">
            <p>{updateTimeAgo}</p>
            <img src={meatballMenuImg} alt="추가메뉴 버튼" />
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="update-date">
            <p>{updateDate}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default Cards;
