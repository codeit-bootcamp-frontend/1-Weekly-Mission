import style from "./Searchbar.module.css";
import searchIcon from "assets/Search.svg";

export default function Searchbar() {
  return (
    <div className={style.wrapper}>
      <img src={searchIcon} alt="search" className={style.searchIcon} />
      <input type="text" placeholder="링크를 검색해 보세요." className={style.searchInput} />
    </div>
  );
}
