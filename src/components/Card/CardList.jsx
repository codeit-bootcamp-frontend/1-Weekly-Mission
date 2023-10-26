import Card from './Card';
import styled from 'styled-components';

function CardList({ items }) {
  return (
    <CardListStyle>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <Card item={item} />
            </li>
          );
        })}
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
