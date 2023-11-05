import searchImg from "../assets/images/Search.png";
import "./Search.css";

function Search() {
  return (
    <form className="search-bar">
      <img className="search-icon" src={searchImg} alt="돋보기 아이콘" />
      <input
        className="search-input"
        placeholder="링크를 검색해 보세요."
      ></input>
    </form>
  );
}

export default Search;
