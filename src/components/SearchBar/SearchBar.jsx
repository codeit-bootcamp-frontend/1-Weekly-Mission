import * as S from './SearchBar.style';
import searchIcon from 'assets/icons/search.svg';

function SearchBar() {
  return (
    <S.SearchBarContainer>
      <S.Input placeholder='링크를 검색해보세요.' />
      <S.Icon src={searchIcon} alt='검색 아이콘' />
    </S.SearchBarContainer>
  );
}

export default SearchBar;
