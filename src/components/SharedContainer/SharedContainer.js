import "../main/Main.css";
import Header from "../header/Header";
import SearchBar from "../main/SearchBar";
import CardList from "../card/CardList";
import useGetSampleFolder from "../../hooks/useGetSampleFolder";

const SharedContainer = () => {
  const folder = useGetSampleFolder();

  return (
    <>
      {folder && <Header folder={folder} />}
      <main>
        <div className="content_wrapper">
          <SearchBar />
          <CardList />
        </div>
      </main>
    </>
  );
};

export default SharedContainer;
