import styles from './Card.module.css';
import kebabImg from '../../assets/images/kebab.svg';
import noImg from '../../assets/images/no-image.svg';
import { useState } from 'react';
import { formatDate, formatTimeAgo } from '../../utils/formatDate';

function Card({ card }) {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const hoverImage = hover ? styles.hoverImage : '';
  const hoverBg = hover ? styles.hoverBgColor : '';

  const imageStyle = `${styles.image} ${hoverImage}`;
  const bgColorStyle = `${styles.root} ${hoverBg}`;

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
            <div>{formatTimeAgo(card.createAt)}</div>
            <img src={kebabImg} alt="쩜쩜쩜" />
          </div>
          <div className={styles.text}>
            <div>{card.title}</div>
            <div>{card.description}</div>
          </div>

          <div className={styles.footer}>{formatDate(card.createAt)}</div>
        </div>
      </a>
    </div>
  );
}

export default Card;
