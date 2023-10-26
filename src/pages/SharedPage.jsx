import CardList from "components/CardList/CardList";
import SearchBar from "components/SearchBar/SearchBar";
import './SharedPage.css';

function SharedPage() {
  return (
    <main>
      <SearchBar />
      <CardList />
    </main>
  );
}

export default SharedPage;
