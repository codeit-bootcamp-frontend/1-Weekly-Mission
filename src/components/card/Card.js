import React from 'react';
import './Card.css';
import { noImage } from '../../constants/globalImages';
import { formatDate, formatDateDiff } from '../../utils/util';

function Card({
  data: { created_at, createdAt, description, image_source, imageSource, url },
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
        </div>
        <div className="card-text-section">
          <p className="time-stamp">{dateDiff}</p>
          <p className="introduce-text">{description}</p>
          <p className="created-date">{formattedDate}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
