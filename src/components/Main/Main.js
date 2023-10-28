import CardList from "../CardList/CardList";
import SearchBar from "../SearchBar/SearchBar";
import "./Main.css";

function Main({ links }) {
  if (!links) {
    return <div>No links available.</div>;
  }
  return (
    <main className="Main">
      <SearchBar />

      <CardList links={links} />
    </main>
  );
}

export default Main;
