import React from 'react';
import EmptyImg from '../assets/icon/emptyImg.svg';
import FormatDate from '../utils/formatDate';
import FormatTime from '../utils/formatTime';
import styles from './card.module.css';

function CardForm({ createdAt, content, imgUrl, url }) {
  const formatDate = FormatDate(createdAt);
  const formatTime = FormatTime(createdAt);

  return (
    <div className={styles.wrapper}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className={styles.imgWrapper}>
          {imgUrl !== undefined ? (
            <img src={imgUrl} alt="cardImg" className={styles.cardImg} />
          ) : (
            <img src={EmptyImg} alt="emptyImg" className={styles.cardImg} />
          )}
        </div>
        <div className={styles.contentWrapper}>
          <span>{formatTime}</span>
          <p className={styles.content}>{content}</p>
          <span>{formatDate}</span>
        </div>
      </a>
    </div>
  );
}

export default CardForm;
