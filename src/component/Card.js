import { useState } from "react";
import { formatDate, prettyFormatTimeDiff } from "../util/dateUtil";
import kebabImg from "../assets/img/kebab.png";
import noImg from "../assets/img/no-image.svg";
import style from "./Card.module.css";
import clsx from "clsx";

function Card({ title, description, url, image_source, created_at }) {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      className={clsx(style.container, { [style.hoverBgColor]: hover })}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <a className={style.card} href={url}>
        <div
          className={clsx(style.image, { [style.hoverImage]: hover })}
          style={{ backgroundImage: `url(${image_source || noImg})` }}
        ></div>
        <div className={style.explanation}>
          <div className={style.header}>
            <div>{prettyFormatTimeDiff(new Date(created_at))}</div>
            <img src={kebabImg} alt="쩜쩜쩜" />
          </div>
          <div className={style.text}>
            <div>{title}</div>
            <div>{description}</div>
          </div>

          <div className={style.footer}>{formatDate(new Date(created_at))}</div>
        </div>
      </a>
    </div>
  );
}

export default Card;
