import './SearchBar.css'
function SearchBar() {
  return (
    <div className='SearchBar flex-center'>
      <input className="SearchBar-input" type="text" placeholder="링크를 검색해 보세요." />

    </div>
  )
}

export default SearchBar;