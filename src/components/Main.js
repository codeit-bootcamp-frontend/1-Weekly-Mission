import { useState, useEffect } from 'react';
import './css/Main.css';
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
        <input
          className="search-div"
          placeholder="링크를 검색해 보세요."
        ></input>
      </div>
      <div className="main-content-wrapper">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
