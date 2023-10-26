import CardList from "components/CardList";
import SearchBar from "components/SearchBar";
import "./SharedPage.css";

function SharedPage() {
  return (
    <main>
      <SearchBar />
      <CardList />
    </main>
  );
}

export default SharedPage;
