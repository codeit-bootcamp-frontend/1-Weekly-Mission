import CardList from "components/CardList/CardList";
import './Main.css';
import SearchBar from "components/SearchBar/SearchBar";

function Main() {
  return (
    <main>
      <SearchBar />
      <CardList />
    </main>
  );
}

export default Main;