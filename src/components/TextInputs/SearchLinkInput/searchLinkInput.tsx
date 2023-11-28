import "./searchLinkInput.css";
import searchImg from "../../../assets/image/Search.svg";

export function SearchLinkInput() {
  return (
    <div className="div_searchLink">
      <input
        className="div_searchLink_input"
        placeholder="링크를 검색해 보세요"
      />
      <img className="div_searchLink_image" alt="search icon" src={searchImg} />
    </div>
  );
}
