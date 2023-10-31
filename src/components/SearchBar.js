import "../styles/SearchBar.css";
import SearchIcon from "../images/Search.svg";

function SearchBar() {
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        className="search-bar"
        placeholder="  링크를 검색해 보세요"
      />

      <img src={SearchIcon} className="search-icon-image" alt=" " />
    </div>
  );
}

export default SearchBar;
