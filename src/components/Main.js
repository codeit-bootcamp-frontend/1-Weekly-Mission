import { useState, useEffect } from 'react';
import './Main.css';
import search from './img/search.svg';
import { getDatas } from '../api';
import Card from './Card';

export default function Main() {
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const { folder } = await getDatas();
    setItems(folder.links);
  };
  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div className="main-container">
      <div className="main-search">
        <img src={search} alt="search" />
        <div className="search-div">링크를 검색해 보세요.</div>
      </div>
      <div className="main-content-wrapper">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
