import Card from './Card';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

function CardList({ items }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <CardListStyle>
        {items.map((item) =>
          <li key={item.id}>
            <Card item={item} path={path}/>
          </li>
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
