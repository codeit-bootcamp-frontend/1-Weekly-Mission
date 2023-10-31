import CardList from '../Card/CardList';
import SearchForm from '../Search/SearchForm';
import Main from '../Main/Main';

function SharedMain({ cards, cardsLoadingError }) {
  return (
    <Main>
      <SearchForm />
      <CardList items={cards} />
      {cardsLoadingError?.message && <span>{cardsLoadingError.message}</span>}
    </Main>
  );
}

export default SharedMain;
