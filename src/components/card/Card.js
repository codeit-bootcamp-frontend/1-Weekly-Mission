import React from 'react';
import './Card.css';
import { kebabIcon, noImage, startIcon } from '../../constants/globalImages';
import { formatDate, formatDateDiff } from '../../utils/util';

function Card({
  data: { created_at, createdAt, description, image_source, imageSource, url },
  hasStar = false,
}) {
  const dateDiff = formatDateDiff(created_at ?? createdAt);
  const formattedDate = formatDate(created_at ?? createdAt);

  return (
    <a href={url} className="card-link" target="_blank" rel="noreferrer">
      <div className="card">
        <div className="card-img-section">
          <img
            src={image_source ?? imageSource ?? noImage}
            alt="folderImage"
            className="sample-img"
          />
          {hasStar && <img className="star" src={startIcon} alt="즐겨찾기" />}
        </div>
        <div className="card-text-section">
          <div className="first-line">
            <p className="time-stamp">{dateDiff}</p>
            {hasStar && <img src={kebabIcon} alt="더보기" />}
          </div>

          <p className="introduce-text">{description}</p>
          <p className="created-date">{formattedDate}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
