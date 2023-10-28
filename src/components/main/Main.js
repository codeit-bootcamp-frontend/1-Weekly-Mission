import "./Main.css";
import CardList from "../card/CardList";
import SearchBar from "./SearchBar";
import FolderList from "./FolderList";

const Main = ({ pageType }) => {
  return (
    <main>
      <div className="content_wrapper">
        <SearchBar />
        {pageType === "folder" && <FolderList />}
        <CardList pageType={pageType} />
      </div>
    </main>
  );
};

export default Main;
