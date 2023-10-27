import CardForm from 'components/CardForm/CardForm';
import { useLocation } from 'react-router-dom';
import styles from './CardList.module.css';

function CardList({ cardData }) {
  const { pathname } = useLocation();
  return (
    <div className={styles.wrapper}>
      {cardData.map((card) => (
        <CardForm
          key={card.id}
          createdAt={pathname === '/folder' ? card.created_at : card.createdAt}
          content={card.description}
          imgUrl={pathname === '/folder' ? card.image_source : card.imageSource}
          url={card.url}
        />
      ))}
    </div>
  );
}

export default CardList;
