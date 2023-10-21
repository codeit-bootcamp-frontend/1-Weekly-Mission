import './SearchBar.css'
import searchIcon from '../../assets/icon/Search_Icon.png'

function SearchBar() {
  return (
    <div className="searchbar-container">
      <div className="searchbar"> 
        <img className="search-icon" src={searchIcon} alt="검색 아이콘"/>
        <input className="searchbar-input" placeholder="링크를 검색해 보세요"/>
      </div>
    </div>
  )
}

export default SearchBar