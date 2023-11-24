import * as S from './CardsContainer.style';
import Card from '@components/Card';

export interface CardProps {
  id: number;
  createdAt?: string;
  created_at?: string;
  description: string;
  imageSource?: string;
  image_source?: string;
  title: string;
  url: string;
}

function CardsContainer({ cards = [] }: { cards: CardProps[] }) {
  return (
    <S.Container>
      {cards.map((card: CardProps) => (
        <li key={card.id}>
          <Card data={card} />
        </li>
      ))}
    </S.Container>
  );
}

export default CardsContainer;
