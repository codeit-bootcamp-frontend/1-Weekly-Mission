import React from 'react';
import ReactTimeAgo from 'react-time-ago';

import DEFAULT_IMAGE from 'assets/images/default-link-img.svg';

function Card({ data }) {
  const { url, title, description, createdAt, imageSource } = data;

  const createdDate = new Date(createdAt);

  const reduceText = (text, length) => {
    if (text.length > length) {
      return `${text.slice(0, length)}...`;
    } else {
      return text;
    }
  };

  return (
    <a href={url} target='_blank' className='card'>
      <div className='card__img-container'>
        <img
          src={imageSource ?? DEFAULT_IMAGE}
          alt='링크 이미지'
          className='card__img'
        />
      </div>
      <div className='card__text'>
        <p className='card__time-passed'>
          <ReactTimeAgo date={createdDate} locale='en-US' />
        </p>
        <p className='card__title'>{reduceText(title, 70)}</p>
        <p className='card__description'>{reduceText(description, 100)}</p>
        <p className='card__date'>{createdDate.toLocaleDateString()}</p>
      </div>
    </a>
  );
}

export default Card;
