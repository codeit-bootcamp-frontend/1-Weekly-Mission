import searchIcon from "../assets/img/search.svg";
import style from "../css/Search.module.css";

function Search() {
  return (
    <div className={style.root}>
      <img src={searchIcon} />
      <input placeholder="링크를 검색해 보세요."></input>
    </div>
  );
}
export default Search;
