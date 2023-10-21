import React from 'react';
import Search from './Search';
import CardList from './CardList';
import '../styles/Main.css';

function Main() {
  return (
    <div className="main-section">
      <Search />
      <CardList />
    </div>
  );
}

export default Main;
