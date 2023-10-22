import style from "./CardItem.module.css";
import logo from "assets/logo.svg";
import { getCreatedDate, getDiffTime } from "common/utils/getDate";

export default function CardItem({ link }) {
  const { description, imageSource, createdAt, url } = link;
  const { yyyy, mm, dd } = getCreatedDate(createdAt);

  return (
    <a href={url} className={style.wrapper} target="_blank" rel="noreferrer">
      <div className={style.imageContainer}>
        <img
          src={imageSource ? imageSource : logo}
          className={`${style.image} ${imageSource ? "" : style.default}`}
        />
      </div>
      <div className={style.info}>
        <p className={style.timeDiffInfo}>{getDiffTime(createdAt)}</p>
        <p className={style.description}>{description}</p>
        <p className={style.createdAt}>
          {yyyy}. {mm}. {dd}
        </p>
      </div>
    </a>
  );
}
