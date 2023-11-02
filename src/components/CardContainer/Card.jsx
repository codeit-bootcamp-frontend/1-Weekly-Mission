import "./CardContainer.css";
import NoCardDataImg from "../../assets/image/img-card--noimg.png";
import StarIcon from "../../assets/image/icon-star.svg";
import ThreeDotsIcon from "../../assets/image/kebab.svg";
import getTimeAgoText from "../../utils/getTimeAgoText";

function Card({ cardData }) {
  const { id, created_at, url, title, description, image_source, folder_id } =
    cardData;

  const timeAgoText = getTimeAgoText(created_at);
  const formulatedCreatedDate = created_at.slice(0, 10).replace(/-/gi, ". ");

  return (
    <a className="link-img" href={url ? url : "#"}>
      <div className="card">
        <div className="div-img">
          <img
            className="cardImg"
            src={image_source ?? NoCardDataImg}
            alt="card"
          />
        </div>
        <img className="img-star" src={StarIcon} alt="star icon" />
        <div className="div-text">
          <div className="text">
            <h5 className="createdTimePassed">{timeAgoText + " ago"}</h5>
            <img src={ThreeDotsIcon} alt="three dots icon" />
          </div>
          <p className="cardDesc">{description}</p>
          <h4 className="createdDate">{formulatedCreatedDate}</h4>
        </div>
      </div>
    </a>
  );
}

export default Card;
