import searchImg from "./image/Search.svg";

export function Search() {
  return (
    <div className="search-box">
      <img src={searchImg} alt="검색아이콘" />
      <input type="search" name="search" placeholder="링크를 검색해 보세요." />
    </div>
  );
}
