import React from 'react';
import './card.css';

function Card({ linkInfo }) {
  return (
    <div className="card">
      <a
        href={`/link/detail/${linkInfo.url}`}
        className="card-link"
        target="_blank"
        rel="noreferrer"
      >
        <div className="card-img-section">
          <img src={linkInfo.imageSource} alt="cat" className="sample-img" />
        </div>
        <div className="card-text-section">
          <p className="time-stamp">몇 분 전...</p>
          <p className="introduce-text">
            Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
            consequat. Tldkd
          </p>
          <p className="created-date">생성 날짜</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
