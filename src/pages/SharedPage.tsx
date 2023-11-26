import { useState, useEffect } from 'react';
import '../css/SharedPage.css';
import search from '../components/img/search.svg';
import { getData } from '../api';
import SharedHeader from '../components/SharedHeader';
import Card from '../components/Card';

export interface itemState {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}

export default function SharedPage() {
  const [items, setItems] = useState<itemState[]>();
  useEffect(() => {
    const handleLoad = async () => {
      const { folder } = await getData('sample/folder');
      setItems(folder.links);
    };
    handleLoad();
  }, []);
  return (
    <>
      <SharedHeader />
      <div className="main-container">
        <div className="main-search">
          <img src={search} alt="search" />
          <input
            className="search-div"
            placeholder="링크를 검색해 보세요."
          ></input>
        </div>
        <div className="main-content-wrapper">
          {items?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
