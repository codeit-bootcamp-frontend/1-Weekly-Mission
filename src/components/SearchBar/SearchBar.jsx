import SearchIMG from "assets/Search.svg";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <form>
      <label htmlFor="search">
        <img src={SearchIMG} alt="검색 돋보기 이미지" />
      </label>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="링크를 검색해 보세요."
      />
    </form>
  );
};

export default SearchBar;
