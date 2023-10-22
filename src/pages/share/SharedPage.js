import React from 'react';
import Card from '../../components/card/Card';
import SearchBar from '../../components/searchBar/SearchBar';
import './sharedpage.css';

export default function SharedPage({ links }) {
  return (
    <main className="main">
      <section className="content-section">
        <div className="container">
          <SearchBar />
          <div className="links-container">
            {links &&
              links.map((item) => (
                <div key={item.id}>
                  <Card linkInfo={item} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
