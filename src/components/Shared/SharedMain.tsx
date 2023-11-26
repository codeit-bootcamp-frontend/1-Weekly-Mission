import CardList, { CardProps } from '../Card/CardList';
import SearchForm from '../Search/SearchForm';
import Main from '../Main/Main';

interface Props {
  cards: CardProps[];
}

function SharedMain({ cards }: Props) {
  return (
    <Main>
      <SearchForm />
      <CardList items={cards} />
    </Main>
  );
}

export default SharedMain;
