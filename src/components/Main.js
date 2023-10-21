import React from 'react';
import '../styles/Main.css';
import CardList from './CardList';
import Search from './Search';

function Main() {
  return (
    <div className="main-section">
      <Search />
      <CardList />
    </div>
  );
}

export default Main;
