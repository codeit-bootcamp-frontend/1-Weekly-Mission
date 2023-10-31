import Banner from "../components/Banner.js";
import CardList from "../components/CardList.js";
import SearchBar from "../components/SearchBar.js";

function SharedPage() {
  return (
    <>
      <Banner />
      <SearchBar />
      <CardList />
    </>
  );
}

export default SharedPage;
