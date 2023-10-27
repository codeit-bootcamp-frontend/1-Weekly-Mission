import EmptyImg from 'assets/icon/emptyImg.svg';
import KebabButton from 'components/KebabButton/KebabButton';
import StarButton from 'components/StarButton/StarButton';
import { useLocation } from 'react-router-dom';
import { changeDate, changeDateTime } from 'utils/dateFormat';
import isEmpty from 'utils/isEmpty';
import styles from './CardForm.module.css';

function CardForm({ createdAt, content, imgUrl, url }) {
  const formatDate = changeDate(createdAt);
  const formatTime = changeDateTime(createdAt);
  const { pathname } = useLocation();

  return (
    <div className={styles.wrapper}>
      <a className={styles.url} href={url} target="_blank" rel="noopener noreferrer">
        <div className={styles.imgWrapper}>
          {!isEmpty(imgUrl) ? (
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
