import React from 'react';
import sampleImg from '../../assets/common/sampleImage.png';
import './card.css';

function Card() {
  return (
    <a href="./" className="card-link">
      <div className="card">
        <div className="card-img-section">
          <img src={sampleImg} alt="cat" className="sample-img" />
        </div>
        <div className="card-text-section">
          <p className="time-stamp">몇 분 전...</p>
          <p className="introduce-text">
            Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
            consequat. Tldkd
          </p>
          <p className="created-date">생성 날짜</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
