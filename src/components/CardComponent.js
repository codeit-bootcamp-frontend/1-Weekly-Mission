import "./CardComponent.css";
import noImg from "../assets/images/noImg.png";

function CardComponent({ cardInfo }) {
  const { createdAt, url, description, title, imageSource } = cardInfo;

  return (
    <li className="cardComponent">
      <a href={url} target="_blank">
        <div className="cardImgBox">
          <img
            className="cardImg"
            // src={imageSource ? imageSource : noImg}
            src={imageSource ?? noImg}
            alt={title}
          />
        </div>
        <div className="cardInfo">
          <div className="updateTime">{createdAt}</div>
          <div className="description">{description}</div>
          <div className="updateDate">{createdAt}</div>
        </div>
      </a>
    </li>
  );
}

export default CardComponent;
