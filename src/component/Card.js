import { useState } from "react";
import { formatDate, prettyFormatTimeDiff } from "../util/useDate";
import kebabImg from "../assets/img/kebab.png";
import noImg from "../assets/img/no-image.svg";
import style from "./Card.module.css";

function Card({ card }) {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  const hoverImage = hover ? style.hoverImage : "";
  const hoverBg = hover ? style.hoverBgColor : "";

  const imageStyle = `${style.image} ${hoverImage}`;
  const bgColorStyle = `${style.container} ${hoverBg}`;

  const bgImg = {
    backgroundImage: `url(${card.imageSource || noImg})`,
  };

  return (
    <div
      className={bgColorStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <a className={style.card} href={card.url}>
        <div className={imageStyle} style={bgImg}></div>
        <div className={style.explanation}>
          <div className={style.header}>
            <div>{prettyFormatTimeDiff(new Date(card.createdAt))}</div>
            <img src={kebabImg} alt="쩜쩜쩜" />
          </div>
          <div className={style.text}>
            <div>{card.title}</div>
            <div>{card.description}</div>
          </div>

          <div className={style.footer}>
            {formatDate(new Date(card.createdAt))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
