import React from 'react';
import './Card.style.css';

function Card({ item }) {
  return (
    <>
      <div className='cardbox'>
        <div className='img-container'>
          <img src={item.imageSource} alt={item.id} className='img' />
        </div>
        <div className='container'>
          <p className='time'>10 minutes ago</p>
          <p className='title'>{item.title}</p>
          <div className='description'>{item.description}</div>
          <p className='date'>{item.createdAt}</p>
        </div>
      </div>
    </>
  );
}

export default function CardList({ items }) {
  return (
    <>
      <div className='cardContainer'>
        {items &&
          items.map(item => {
            return <Card item={item} />;
          })}
      </div>
    </>
  );
}
