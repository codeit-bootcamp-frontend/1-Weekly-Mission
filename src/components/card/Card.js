import React from 'react';
import './Card.css';
import { noImage } from '../../constants/globalImages';
import { formatDate, formatDateDiff } from '../../utils/util';

function Card({ data: { createdAt, description, imageSource, url } }) {
  const dateDiff = formatDateDiff(createdAt);
  const formattedDate = formatDate(createdAt);

  return (
    <a href={url} className="card-link" target="_blank" rel="noreferrer">
      <div className="card">
        <div className="card-img-section">
          <img
            src={imageSource ?? noImage}
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
