import React from 'react';
import './Card.style.css';
import { dateConvert, dateFormat } from '../../utils/utils';

export default function Card({ item }) {
  const { id, createdAt, imageSource, title, description, url } = item;

  return (
    <a href={url}>
      <div className='cardbox'>
        <div className='img-container'>
          <img src={imageSource} alt={id} className='img' />
        </div>
        <div className='container'>
          <p className='time'>{dateConvert(createdAt)}</p>
          <p className='title'>{title}</p>
          <div className='description'>{description}</div>
          <p className='date'>{dateFormat(createdAt)}</p>
        </div>
      </div>
    </a>
  );
}
