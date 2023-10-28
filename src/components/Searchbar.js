import searchIcon from "../assets/svg/Search.svg";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form className="search-bar">
      <div className="search-bar-wrapper">
        <img className="search-icon" src={searchIcon} alt="검색아이콘" />
        <input
          className="search-bar-input"
          placeholder="링크를 검색해 보세요."
        />
      </div>
    </form>
  );
};

export default SearchBar;
