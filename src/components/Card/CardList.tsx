import Card from './Card';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';


export interface CardProps {
  id: number,
  created_at?: Date,
  createdAt?: Date,
  description: string,
  image_source?: string,
  imageSource?: string
}

interface CardListProps {
  items: CardProps[];
}

function CardList({ items }: CardListProps) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <CardListStyle>
      {items.map((card) =>
        <Li key={card.id}>
          <Card item={card} path={path} />
        </Li>,
      )}
    </CardListStyle>
  );
}

export default CardList;

const CardListStyle = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    gap: 2rem 2.5rem;
  }
`;

const Li = styled.li`
  position: relative;
`;
