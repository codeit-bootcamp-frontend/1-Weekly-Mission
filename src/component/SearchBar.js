import iconSearch from "../assets/img/icon-search.svg";
import "../assets/css/SearchBar.css";

function SearchBar({ size }) {
  const classname = `searchBar-${size}`;
  return (
    <div className={classname}>
      <img src={iconSearch} />
      <input placeholder="링크를 검색해 보세요." />
    </div>
  );
}

export default SearchBar;
