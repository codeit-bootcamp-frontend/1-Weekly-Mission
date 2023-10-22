import "./CardComponent.css";
import noImg from "../assets/images/noImg.png";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function CardComponent({ cardInfo }) {
  const { createdAt, url, description, title, imageSource } = cardInfo;

  const updateTimeAgo = dayjs(createdAt).fromNow();
  const updateDate = dayjs(createdAt).format("YYYY. MM. DD");

  return (
    <li className="cardComponent">
      <a href={url} target="blank">
        <div className="cardImgBox">
          <img className="cardImg" src={imageSource ?? noImg} alt={title} />
        </div>
        <div className="cardInfo">
          <div className="updateTime">
            <p>{updateTimeAgo}</p>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="updateDate">
            <p>{updateDate}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

export default CardComponent;
