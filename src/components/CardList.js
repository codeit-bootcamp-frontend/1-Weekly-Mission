import React, { useEffect, useState } from 'react';
import { introRequestData } from '../services/Api';
import styles from '../styles/modules/cardList.module.css';
import CardForm from './CardForm';

function CardList() {
  const [result, setResult] = useState([]);

  const cardList = async () => {
    const cardListResult = await introRequestData();
    if (!cardListResult) return;

    const { links } = cardListResult.folder;
    setResult(links);
  };

  useEffect(() => {
    cardList();
  }, []);

  return (
    <div className={styles.wrapper}>
      {result &&
        result.map((result) => (
          <CardForm
            key={result.id}
            createdAt={result.createdAt}
            content={result.description}
            imgUrl={result.imageSource}
            url={result.url}
          />
        ))}
    </div>
  );
}

export default CardList;
