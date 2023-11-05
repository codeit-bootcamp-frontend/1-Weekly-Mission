import "./Cards.css";
import DEFAULT_IMG from "../assets/images/noImg.png";
import favoritesImg from "../assets/images/star.svg";
import meatballMenuImg from "../assets/images/meatball.svg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PopOver from "./PopOver";
dayjs.extend(relativeTime);

function MeatballBtn() {
  return <img src={meatballMenuImg} alt="추가메뉴 버튼" />;
}

function FavoriteBtn() {
  return <img className="favorites" src={favoritesImg} alt="즐겨찾기 이미지" />;
}

function Cards({ cardInfo }) {
  const { createdAt, url, description, imageSource, created_at, image_source } =
    cardInfo;

  const updateTimeAgo = dayjs(createdAt ?? created_at).fromNow();
  const updateDate = dayjs(createdAt ?? created_at).format("YYYY. MM. DD");

  function handlePopOver (PopOverOn) {
    return PopOverOn && <PopOver />
  }

  return (
    <li className="card-list">
      <a href={url} target="_blank" rel="noreferrer noopener">
        <div className="card-box">
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
            <MeatballBtn onClick={handlePopOver} />
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
