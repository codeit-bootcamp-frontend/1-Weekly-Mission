import searchIcon from '../../Assets/Search.svg'
import '../css/Search.css'

function Search() {
  return(
    <div>
      <form className='search'>
        <img className='search_icon' src={searchIcon} alt={searchIcon}></img>
        <input className='search_input' placeholder="링크를 검색해보세요"></input>
      </form>
    </div>
  );
};

export default Search