import searchImg from '../../assets/Search.svg'
import './SearchBar.css'

function SearchBar() {
  return (
    <div className='search'>
      <input className='search__input' placeholder='링크를 검색해보세요.'></input>
      <img className='search__img' src={searchImg} alt='검색창 표시 이미지'></img>
    </div>
  )
}

export default SearchBar