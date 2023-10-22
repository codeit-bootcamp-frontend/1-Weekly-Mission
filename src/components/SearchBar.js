import "./SearchBar.css";
import searchImg from "../img/Search.png";

function SearchBar() {
  return (
    <div className="section-title searchbar">
      <div className="search-inner-box">
        <img src={searchImg} alt="searchIcon" />
        <input placeholder="링크를 검색해보세요" />
      </div>
    </div>
  );
}

export default SearchBar;
