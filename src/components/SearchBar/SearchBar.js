import "./SearchBar.css";
import searchIcon from "../../assets/icon/Search_Icon.png";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <img className="search-icon" src={searchIcon} alt="검색 아이콘" />
        <input
          className="search-bar-input"
          placeholder="링크를 검색해 보세요"
        />
      </div>
    </div>
  );
}

export default SearchBar;
