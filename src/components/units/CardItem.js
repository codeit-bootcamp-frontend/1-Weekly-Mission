import "components/units/CardItem.css";
import logo from "assets/logo.svg";
import { getCreatedDate, getDiffTime } from "common/utils/getDate";

export default function CardItem({ link }) {
  const { description, imageSource, createdAt, url } = link;
  const { yyyy, mm, dd } = getCreatedDate(createdAt);

  return (
    <a href={url} className="item" target="_blank" rel="noreferrer">
      <div className="image-wrapper">
        <img
          src={imageSource ? imageSource : logo}
          className={imageSource ? "image" : "image default"}
        />
      </div>
      <div className="info">
        <p className="timeDiffInfo">{getDiffTime(createdAt)}</p>
        <p className="description">{description}</p>
        <p className="createdAt">
          {yyyy}. {mm}. {dd}
        </p>
      </div>
    </a>
  );
}
