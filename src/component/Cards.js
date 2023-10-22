import style from "../css/Cards.module.css";
import kebabImg from "../assets/img/kebab.png";
import noImg from "../assets/img/no-image.svg";
import { useState } from "react";

function Card({ card }) {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  const createdTime = (value) => {
    const createdAt = new Date(value);
    const now = new Date();
    const createdTime = Math.floor((now - createdAt) / (1000 * 60));
    if (createdTime < 2) return "1 minute ago";
    if (createdTime <= 59) return `${createdTime} minutes ago`;
    if (createdTime < 2 * 60) return `1 hour ago`;
    if (createdTime <= 60 * 23)
      return `${Math.floor(createdTime / 60)} hours ago`;
    if (createdTime < 60 * 25) return `1 day ago`;
    if (createdTime <= 60 * 24 * 30)
      return `${Math.floor(createdTime / (60 * 24))} days ago`;
    if (createdTime < 60 * 24 * 32) return `1 month ago`;
    if (createdTime <= 60 * 24 * 31 * 11)
      return `${Math.floor(createdTime / (60 * 24 * 31))} months ago`;
    if (createdTime < 60 * 24 * 31 * 13) return `1 year ago`;
    return `${Math.floor(createdTime / (60 * 24 * 31 * 12))} years ago`;
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
            <div>{createdTime(card.createdAt)}</div>
            <img src={kebabImg} alt="쩜쩜쩜" />
          </div>
          <div className={style.text}>
            <div>{card.title}</div>
            <div>{card.description}</div>
          </div>

          <div className={style.footer}>{formatDate(card.createdAt)}</div>
        </div>
      </a>
    </div>
  );
}

function Cards({ cards }) {
  return (
    <article className={style.root}>
      {cards.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </article>
  );
}
export default Cards;
