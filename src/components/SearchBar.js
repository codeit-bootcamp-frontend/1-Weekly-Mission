import searchImg from "../images/search.svg";
import "../css/searchbar.css";

function SearchBar() {
  return (
    <div className="searchContainer">
      <input className="searchInput" placeholder="링크를 검색해 보세요." />
      <img className="searchImg" src={searchImg} alt="검색 이미지" />
    </div>
  );
}

export default SearchBar;
