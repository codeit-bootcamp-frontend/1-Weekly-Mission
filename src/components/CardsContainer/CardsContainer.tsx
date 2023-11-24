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

interface Props {
  cards: CardProps[];
  userId: number;
}

function CardsContainer({ cards = [], userId }: Props) {
  return (
    <S.Container>
      {cards.map((card: CardProps) => (
        <li key={card.id}>
          <Card data={card} userId={userId} />
        </li>
      ))}
    </S.Container>
  );
}

export default CardsContainer;
