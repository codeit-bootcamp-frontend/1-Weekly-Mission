import "../../styles/SearchBar.css";
import searchIcon from "../../images/Search.svg";

function SearchBar() {
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        className="search-bar"
        placeholder="  링크를 검색해 보세요"
      />

      <img src={searchIcon} className="search-icon-image" alt=" " />
    </div>
  );
}

export default SearchBar;
