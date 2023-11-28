import * as S from './SearchBar.style';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEARCH_ICON from '@assets/icons/search.svg';
import CLOSE from '@assets/icons/close.svg';

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialKeyword = searchParams.get('keyword') ?? '';
  const [keyword, setKeyword] = useState(initialKeyword ?? '');

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const onSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    searchParams.set('keyword', keyword);
    setSearchParams(searchParams);
  };

  const onReset = () => {
    setKeyword('');
    searchParams.set('keyword', '');
    setSearchParams(searchParams);
  };

  return (
    <S.Form onSubmit={onSearch}>
      <S.Input
        placeholder='링크를 검색해보세요.'
        onChange={onChange}
        value={keyword}
      />
      <S.Icon src={SEARCH_ICON} alt='검색 아이콘' />
      {keyword && (
        <S.Reset type='button' onClick={onReset}>
          <img src={CLOSE} />
        </S.Reset>
      )}
    </S.Form>
  );
}

export default SearchBar;
