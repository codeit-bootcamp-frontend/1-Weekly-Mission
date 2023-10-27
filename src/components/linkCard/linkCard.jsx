import "./linkCard.css";
import noImageSource from "../../assets/images/noLinkCardImg.png";
import { NO_SPECIAL_CHA_PATTERN } from "../../utils/constants";
import getTimeAgo from "../../utils/getTimeAgo.js";
import { parseISO, format } from "date-fns";

export default function LinkCardComponent({ cardData }) {
  const { createdAt, url, description, title, imageSource } = cardData;

  const imageAlt =
    title.split(" ")[0].replace(NO_SPECIAL_CHA_PATTERN, "") + " 대표 이미지";

  const parsedCreatedDate = format(parseISO(createdAt), "yyyy-MM-dd");

  return (
    <li className="card--container">
      <a
        href={url}
        target="_blank"
        alt=""
        rel="noopener noreferrer"
        className="card--wrapper"
      >
        <div className="card--image-container">
          <img
            className="card--image"
            src={imageSource ?? noImageSource}
            alt={imageAlt}
          />
        </div>
        <div className="card--info">
          <div className="time-ago">{getTimeAgo(createdAt)}</div>
          <div className="description">{description}</div>
          <div className="created-date">{parsedCreatedDate}</div>
        </div>
      </a>
    </li>
  );
}
