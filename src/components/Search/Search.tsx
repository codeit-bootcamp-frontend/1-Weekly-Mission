import searchIcon from "../../assets/img/search.svg";
import style from "./Search.module.css";
import Image from "next/image";
function Search() {
  return (
    <div className={style.root}>
      <Image src={searchIcon} alt="검색 아이콘" />
      <input placeholder="링크를 검색해 보세요."></input>
    </div>
  );
}
export default Search;
