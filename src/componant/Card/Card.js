import styles from './Card.module.css';
import kebabImg from '../../images/kebab.svg';
import noImg from '../../images/no-image.svg';
import { useState } from 'react';
import FormatData from '../../formatDate';

function Card({ card }) {
  const useCardHover = () => {
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => {
      setHover(true);
    };

    const handleMouseOut = () => {
      setHover(false);
    };

    return [hover, handleMouseOver, handleMouseOut];
  };

  const [hover, handleMouseOver, handleMouseOut] = useCardHover();

  const hoverImage = hover ? styles.hoverImage : '';
  const hoverBg = hover ? styles.hoverBgColor : '';

  const imageStyle = `${styles.image} ${hoverImage}`;
  const bgColorStyle = `${styles.root} ${hoverBg}`;

  const bgImg = {
    backgroundImage: `url(${card.imageSource || noImg})`,
  };

  const formatData = new FormatData(card.createdAt);

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
            <div>{formatData.timeAgo()}</div>
            <img src={kebabImg} alt="쩜쩜쩜" />
          </div>
          <div className={styles.text}>
            <div>{card.title}</div>
            <div>{card.description}</div>
          </div>

          <div className={styles.footer}>{formatData.ymd()}</div>
        </div>
      </a>
    </div>
  );
}

export default Card;
