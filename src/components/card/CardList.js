import React from 'react';
import Card from './Card';
import CardSearchBar from './CardSearchBar';

function CardList({ links }) {
  return (
    <>
      <CardSearchBar />
      <div className="card-container">
        {links.map((link) => (
          <Card key={link.id} data={link} />
        ))}
      </div>
    </>
  );
}

export default CardList;
