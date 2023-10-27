import { useState } from 'react';
import searchImg from '../../assets/Search.svg'
import './SearchBar.css'
import { useSearchParams } from 'react-router-dom';

function SearchBar() {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ folderId: value, });
  }
  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <input name="folderId" className='search__input' placeholder='링크를 검색해보세요.' value={value} onChange={handleChange} />
      </form>
      <img className='search__img' src={searchImg} alt='검색창 표시 이미지'></img>
    </div>
  )
}

export default SearchBar