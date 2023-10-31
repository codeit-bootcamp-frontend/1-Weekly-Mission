import React from 'react';
import Card from './Card';
import './CardList.css';

function CardList({ links, hasStar }) {
  return (
    <div className="card-container">
      {links.length > 0 ? (
        links.map((link) => (
          <Card key={link.id} data={link} hasStar={hasStar} />
        ))
      ) : (
        <span className="no-link">저장된 링크가 없습니다.</span>
      )}
    </div>
  );
}

export default CardList;
