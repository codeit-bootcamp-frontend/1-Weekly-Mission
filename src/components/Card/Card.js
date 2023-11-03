import styles from './Card.module.css';
import kebabImg from '../../assets/images/kebab.svg';
import noImg from '../../assets/images/no-image.svg';
import starIcon from '../../assets/images/star.svg';
import { useState } from 'react';
import { formatDate, formatTimeAgo } from '../../utils/formatDate';
import normalizeCardData from '../../utils/normalizeCardData';
import clsx from 'clsx';
import DeleteLink from '../../modals/DeleteLink';
import Modal from '../../modals/Modal';
import useModalColtroller from '../../hooks/useModalController';

function Card({ card, shared }) {
  const deleteLinkModal = useModalColtroller(true);
  const addModal = useModalColtroller(true);
  const kebab = useModalColtroller(true);

  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const normalizedCardData = normalizeCardData(card);
  const cardDate = normalizedCardData.createdAt;
  const cardImage = normalizedCardData.imageSource;

  const imageStyle = clsx(styles.image, hover && styles.hoverImage);
  const bgColorStyle = clsx(styles.root, hover && styles.hoverBgColor);

  const bgImg = {
    backgroundImage: `url(${cardImage || noImg})`,
  };

  return (
    <div
      className={bgColorStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <a href={card.url}>
        <div className={imageStyle} style={bgImg}>
          {shared === 'off' && (
            <button type="button" className={styles.star}>
              <img src={starIcon} alt="즐겨찾기" />
            </button>
          )}
        </div>
        <div className={styles.explanation}>
          <div className={styles.header}>
            <div>{formatTimeAgo(cardDate)}</div>
            {shared === 'off' && (
              <div className={styles.kebab}>
                <button type="button" onClick={kebab.handleClick}>
                  <img src={kebabImg} alt="쩜쩜쩜" />
                </button>

                {kebab.state && (
                  <div className={styles.kebabButtonList}>
                    <button
                      className={styles.kebabButton}
                      onClick={deleteLinkModal.handleClick}
                    >
                      삭제하기
                    </button>
                    <button
                      className={styles.kebabButton}
                      onClick={addModal.handleClick}
                    >
                      폴더에 추가
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className={styles.text}>
            <div>{card.title}</div>
            <div>{card.description}</div>
          </div>

          <div className={styles.footer}>{formatDate(cardDate)}</div>
        </div>
      </a>
      {deleteLinkModal.state && (
        <Modal onClick={deleteLinkModal.handleClick}>
          <DeleteLink>{card.url}</DeleteLink>
        </Modal>
      )}
      {addModal.state && (
        <Modal onClick={addModal.handleClick}>
          <DeleteLink>{card.url}</DeleteLink>
        </Modal>
      )}
    </div>
  );
}

export default Card;
