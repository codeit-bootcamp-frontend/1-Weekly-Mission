import React from 'react';
import cardImage01 from '../assets/CardImage/image-01.png';
import cardImage02 from '../assets/CardImage/image-02.png';
import cardImage03 from '../assets/CardImage/image-03.png';
import cardImage04 from '../assets/CardImage/image-04.png';
import cardImage05 from '../assets/CardImage/image-05.png';
import cardImage06 from '../assets/CardImage/image-06.png';
import cardImage07 from '../assets/CardImage/image-07.png';
import cardImage08 from '../assets/CardImage/image-08.png';
import cardImage09 from '../assets/CardImage/image-09.png';
import './Card.style.css';

const CARD_IMAGE = [
  cardImage01,
  cardImage02,
  cardImage03,
  cardImage04,
  cardImage05,
  cardImage06,
  cardImage07,
  cardImage08,
  cardImage09,
];

function Card({ num = 1, item }) {
  const src = CARD_IMAGE[num - 1];
  return (
    <>
      <div className='cardbox'>
        <div className='img-container'>
          <img src={src} alt={src} className='img' />
        </div>
        <div className='container'>
          <p className='time'>10 minutes ago</p>
          <div className='description'>{item.content}</div>
          <p className='date'>{item.createdAt}</p>
        </div>
      </div>
    </>
  );
}

export default function CardList({ items }) {
  return (
    <>
      <div>
        {items.map(item => {
          return <Card num={item.id} item={item} />;
        })}
      </div>
    </>
  );
}
