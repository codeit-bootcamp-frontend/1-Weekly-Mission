import "components/units/CardItem.css";
import logo from "assets/logo.svg";

export default function CardItem({ link }) {
  const { description, imageSource, createdAt, url } = link;
  return (
    <a href={url} className="item" target="_blank" rel="noreferrer">
      <div className="image-wrapper">
        <img
          src={imageSource ? imageSource : logo}
          className={imageSource ? "image" : "image default"}
        />
      </div>
      <div className="info">
        <p className="timeDiffInfo">10 minutes ago</p>
        <p className="description">{description}</p>
        <p className="createdAt">{createdAt}</p>
      </div>
    </a>
  );
}
