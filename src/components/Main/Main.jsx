import CardList from "../CardList/CardList";
import './Main.css';
import SearchBar from "../SearchBar/SearchBar";

function Main() {
  return (
    <main>
      <SearchBar />
      <CardList />
    </main>
  );
}

export default Main;