import CardList from '../CardList';
import styled from 'styled-components';
import SearchForm from './SearchForm';

function FolderMain({ cards, cardsLoadingError }) {
  return (
    <Main>
      <SearchForm />
      <CardList items={cards} />
      {cardsLoadingError?.message && <span>{cardsLoadingError.message}</span>}
    </Main>
  );
}

export default FolderMain;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 3.2rem;

  @media (min-width: 768px) {
    gap: 4rem;
    padding: 0 3rem;
    margin: 4rem 0;
  }
`;
