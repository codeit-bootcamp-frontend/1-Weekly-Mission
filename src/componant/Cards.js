import styles from './Cards.module.css';
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

  const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  const hoverImage = hover ? styles.hoverImage : '';
  const hoverBg = hover ? styles.hoverBgColor : '';

  const imageStyle = `${styles.image} ${hoverImage}`;
  const bgColorStyle = `${styles.container} ${hoverBg}`;

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
        <div className={styles.explanation}>
          <div className={styles.header}>
            <div>{card.createdAt}</div>
            <img src={kebabImg} alt="쩜쩜쩜" />
          </div>
          <div className={styles.text}>
            <div>{card.title}</div>
            <div>{card.description}</div>
          </div>

          <div className={styles.footer}>{formatDate(card.createdAt)}</div>
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
    <article className={styles.root}>
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
