import React from 'react';
import './card.css';
import { NoImage } from './CommonImages';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function formatDateDiff(value) {
  const date = new Date(value);
  const now = new Date();

  const diffMilliseconds = now - date;
  const diffMinutes = diffMilliseconds / (1000 * 60);
  let message = '';

  if (diffMinutes < 2) {
    message = '1 minute ago';
  } else if (diffMinutes <= 59) {
    message = `${Math.floor(diffMinutes)} minutes ago`;
  } else if (diffMinutes < 60 * 24) {
    const diffHours = Math.floor(diffMinutes / 60);
    message = diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
  } else if (diffMinutes <= 60 * 24 * 30) {
    const diffDays = Math.floor(diffMinutes / (60 * 24));
    message = diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
  } else if (diffMinutes <= 60 * 24 * 365) {
    const diffMonths = Math.floor(diffMinutes / (60 * 24 * 30));
    message = diffMonths === 1 ? '1 month ago' : `${diffMonths} months ago`;
  } else {
    const diffYears = Math.floor(diffMinutes / (60 * 24 * 365));
    message = diffYears === 1 ? '1 year ago' : `${diffYears} years ago`;
  }

  return message;
}

function Card(data) {
  const {
    data: { createdAt, description, imageSource, url },
  } = data;
  // url, title, id

  return (
    <a href={url} className="card-link" target="_blank" rel="noreferrer">
      <div className="card">
        <div className="card-img-section">
          <img
            src={imageSource ?? NoImage}
            alt="folderImage"
            className="sample-img"
          />
        </div>
        <div className="card-text-section">
          <p className="time-stamp">{formatDateDiff(createdAt)}</p>
          <p className="introduce-text">{description}</p>
          <p className="created-date">{formatDate(createdAt)}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
