import React from 'react';
import './Card.style.css';
import { dateConvert, dateFormat } from '../../utils/utils';

export default function Card({ item }) {
  const { id, created_at, image_source, title, description, url } = item;

  return (
    <a href={url}>
      <div className='cardbox'>
        <div className='img-container'>
          <img src={image_source} alt={id} className='img' />
        </div>
        <div className='container'>
          <p className='time'>{dateConvert(created_at)}</p>
          <p className='title'>{title}</p>
          <div className='description'>{description}</div>
          <p className='date'>{dateFormat(created_at)}</p>
        </div>
      </div>
    </a>
  );
}
