import searchImg from '../assets/search.svg';
import styled from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styled.container}>
      <img className={styled.image} src={searchImg} alt="돋보기" />
      <input className={styled.input} type="text" placeholder="링크를 검색해 보세요." />
    </div>
  );
}

export default SearchBar;
