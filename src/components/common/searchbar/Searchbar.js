import "./Searchbar.css";
import searchIcon from "assets/Search.svg";

export default function Searchbar() {
  return (
    <div className="searchBar">
      <img src={searchIcon} alt="search" className="searchBar__icon" />
      <input type="text" placeholder="링크를 검색해 보세요." className="searchBar__input" />
    </div>
  );
}
