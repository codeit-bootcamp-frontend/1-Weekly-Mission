import React from 'react';
import CardItem from './CardItem';
import styles from '../styles/Cards.module.css';

const Card = ({ folderData }) => {
  if (folderData && folderData.folder) {
    const { folder } = folderData;
    const { links } = folder;

    return (
      <div className={styles.root}>
        <ul className={styles.CardList}>
          {links.map((data) => (
            <li key={data.id}>
              <CardItem item={data} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Card;
