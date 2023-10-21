import React from 'react';
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';

export default function SharedPage() {
  return (
    <main>
      <SearchBar />
      <Card />
    </main>
  );
}
