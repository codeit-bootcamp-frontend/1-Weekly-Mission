import './SearchBar.style.css';

export default function SearchBar() {
  const src = './assets/Search.svg';
  return (
    <div className='searchBarWrapper'>
      <img src={src} alt='search' />
      <input placeholder='링크를 검색해 보세요.' />
    </div>
  );
}
