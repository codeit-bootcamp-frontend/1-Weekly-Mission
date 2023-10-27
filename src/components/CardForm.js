import React from 'react';
import { useLocation } from 'react-router-dom';
import EmptyImg from '../assets/icon/emptyImg.svg';
import { changeDate, changeDateTime } from '../utils/dateFormat';
import styles from './CardForm.module.css';
import KebabButton from './KebabButton';
import StarButton from './StarButton';

function CardForm({ createdAt, content, imgUrl, url }) {
  const formatDate = changeDate(createdAt);
  const formatTime = changeDateTime(createdAt);
  const { pathname } = useLocation();
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
      {pathname === '/folder' && (
        <>
          <StarButton />
          <KebabButton />
        </>
      )}
    </div>
  );
}

export default CardForm;
