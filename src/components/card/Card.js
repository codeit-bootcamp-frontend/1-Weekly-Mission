import React from 'react';
import './card.css';
import logo from '../../assets/common/logo.svg';
import calcCreateTime from '../../utils/calcCreateTime';

function Card({ linkInfo }) {
  const createdAt = new Date(linkInfo?.createdAt);
  const formattedTime = calcCreateTime(createdAt);

  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const date = createdAt.getDate();

  return (
    <div className="card">
      <a
        href={`${linkInfo.url}`}
        className="card-link"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={
            linkInfo?.imageSource
              ? 'card-img-section'
              : 'card-img-section-empty'
          }
        >
          <img
            src={linkInfo?.imageSource || logo}
            className={
              linkInfo?.imageSource ? 'sample-img' : 'sample-img-empty'
            }
            alt="cat"
          />
        </div>
        <div className="card-text-section">
          <p className="time-stamp">{formattedTime}</p>
          <p className="introduce-text">
            Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
            consequat. Tldkd
          </p>
          <p className="created-date">{`${year}. ${month}. ${date}`}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
