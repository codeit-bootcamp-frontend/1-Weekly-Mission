import style from './Cards.module.css';
import kebabImg from '../images/kebab.svg';
import noImg from '../images/no-image.svg';
import { useState } from 'react';

function Card({ card }) {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  const hoverImage = hover ? style.hoverImage : '';
  const hoverBg = hover ? style.hoverBgColor : '';

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
      <a href={card.url}>
        <div className={imageStyle} style={bgImg}></div>
        <div className={style.explanation}>
          <div className={style.header}>
            <div>{card.createdAt}</div>
            <img src={kebabImg} alt="쩜쩜쩜" />
          </div>
          <div className={style.text}>
            <div>{card.title}</div>
            <div>{card.description}</div>
          </div>

          <div>{card.createdAt}</div>
        </div>
      </a>
    </div>
  );
}

function Cards({ cards }) {
  const dotRemover = {
    listStyleType: 'none',
  };

  return (
    <article className={style.root}>
      {cards.map((card) => {
        return (
          <li style={dotRemover} key={card.id}>
            <Card card={card} />
          </li>
        );
      })}
    </article>
  );
}
export default Cards;
