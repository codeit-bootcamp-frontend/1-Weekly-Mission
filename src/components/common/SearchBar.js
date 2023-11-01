import searchImg from 'assets/images/search.svg';
import 'styles/searchBar.css';

function SearchBar() {
  return (
    <form className="search_bar_container">
      <img className="search_bar_icon" src={searchImg} alt="검색 돋보기 아이콘" />
      <input className="search_bar_input" placeholder="링크를 검색해 보세요." />
    </form>
  );
}

export default SearchBar;
