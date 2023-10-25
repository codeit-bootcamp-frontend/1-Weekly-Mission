import '../css/searchBar.css';

function SearchBar() {
  return (
    <>
      <form className="search-form">
        <img className="search-icon" src="../assets/image/search.svg" alt="검색 아이콘" />
        <input className="search-bar" type="text" placeholder="링크를 검색해 보세요." />
      </form>
    </>
  );
}

export default SearchBar;
