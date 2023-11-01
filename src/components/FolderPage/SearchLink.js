import searchImg from "../../assets/images/Search.svg";
import "./SearchLink.css";
function SearchLink() {
  return (
    <div className="searchLinkContainer">
      <input
        className="searchLinkInput"
        placeholder="링크를 검색해 보세요."
      ></input>
      <img className="searchImg" src={searchImg} alt="검색 이미지" />
    </div>
  );
}

export default SearchLink;
