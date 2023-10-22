import Search from './Search';
import Cards from './Cards';
import './Section.css';
import { getSampleFolder } from '../api';
import { useState, useEffect } from 'react';

function Section() {
  const [cards, setCards] = useState([]);

  const loadLink = async () => {
    const {
      folder: { links },
    } = await getSampleFolder();

    setCards((prevCards) => {
      return [...prevCards, ...links];
    });
  };

  useEffect(() => {
    loadLink();
  }, []);

  return (
    <section className="section">
      <Search />
      <Cards cards={cards} />
    </section>
  );
}

export default Section;
