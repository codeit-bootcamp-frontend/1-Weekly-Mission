import React from 'react';
import Card from './Card';
import './CardList.css';

function CardList({ links }) {
  return (
    <div className="card-container">
      {links.map((link) => (
        <Card key={link.id} data={link} />
      ))}
    </div>
  );
}

export default CardList;
