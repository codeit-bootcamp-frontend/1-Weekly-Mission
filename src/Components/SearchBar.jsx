import searchIcon from 'assets/icons/search.svg';

function SearchBar() {
  return (
    <div className='search-bar'>
      <input placeholder='링크를 검색해보세요.' className='search-bar__input' />
      <img src={searchIcon} alt='검색 아이콘' className='search-bar__icon' />
    </div>
  );
}

export default SearchBar;
