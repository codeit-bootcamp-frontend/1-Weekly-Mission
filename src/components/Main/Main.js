import CardList from "./CardList";
import SearchBar from "./SearchBar";


function Main({ links }) {
  if (!links) {
    return <div>No links available.</div>;
  }
  return (
    <>
      <SearchBar />

      <CardList links ={links} />

    </>
  )
}

export default Main;