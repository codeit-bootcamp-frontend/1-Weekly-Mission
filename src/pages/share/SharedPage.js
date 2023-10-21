import React from 'react';
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';

export default function SharedPage({ links }) {
  return (
    <main>
      <SearchBar />
      {links.map((item) => (
        <div key={item.id}>
          <Card linkInfo={item} />
        </div>
      ))}
    </main>
  );
}
