import "./Cards.css";
import noImg from "../assets/images/noImg.png";
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
          <img className="card" src={imageSource ?? noImg} alt="카드이미지" />
        </div>
        <div className="card-info">
          <div className="update-time">
            <p>{updateTimeAgo}</p>
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
