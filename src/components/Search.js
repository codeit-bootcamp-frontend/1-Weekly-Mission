import searchImg from '../assets/Search.svg';
import '../styles/Search.css';

export default function Search() {
  return (
    <div className='search'>
      <div className='search-box'>
        <img src={searchImg} alt='search' className='serach-img' />
        <input
          type='text'
          className='search-input'
          placeholder='링크를 검색해 보세요'
        />
      </div>
    </div>
  );
}
