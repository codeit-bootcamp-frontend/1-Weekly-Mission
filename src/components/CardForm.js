import React from 'react';
import EmptyImg from '../assets/icon/emptyImg.svg';
import styles from '../styles/modules/Card.module.css';
import CutString from '../utils/CutString';
import FormatDate from '../utils/FormatDate';
import FormatTime from '../utils/FormatTime';

function CardForm({ createdAt, content, imgUrl, url }) {
  const formatDate = FormatDate(createdAt);
  const formatTime = FormatTime(createdAt);
  const cutString = CutString(content);

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
          <p className={styles.content}>{cutString}</p>
          <span>{formatDate}</span>
        </div>
      </a>
    </div>
  );
}

export default CardForm;
