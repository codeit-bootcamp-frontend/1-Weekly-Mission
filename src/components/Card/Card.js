import EmptyImg from 'assets/icon/emptyImg.svg';
import KebabButton from 'components/KebabButton/KebabButton';
import StarButton from 'components/StarButton/StarButton';
import { changeDate, changeDateTime } from 'utils/dateFormat';
import isEmpty from 'utils/isEmpty';
import styles from './Card.module.css';

function Card({ card, isCardEditable }) {
  const { url, description, created_at, createdAt, image_source, imageSource } = card;

  const formatDate = changeDate(createdAt ?? created_at);
  const formatTime = changeDateTime(createdAt ?? created_at);

  return (
    <div className={styles.wrapper}>
      <a className={styles.url} href={url} target="_blank" rel="noopener noreferrer">
        <div className={styles.imgWrapper}>
          {!isEmpty(image_source ?? imageSource) ? (
            <img src={image_source ?? imageSource} alt="cardImg" className={styles.cardImg} />
          ) : (
            <img src={EmptyImg} alt="emptyImg" className={styles.cardImg} />
          )}
        </div>
        <div className={styles.contentWrapper}>
          <span>{formatTime}</span>
          <p className={styles.content}>{description}</p>
          <span>{formatDate}</span>
        </div>
      </a>
      {isCardEditable && (
        <>
          <StarButton />
          <KebabButton />
        </>
      )}
    </div>
  );
}

export default Card;
